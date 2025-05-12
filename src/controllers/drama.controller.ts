import { Request, Response } from "express";
import * as cheerio from "cheerio";
import puppeteer, { HTTPRequest } from "puppeteer";
import { upgradePosterUrl } from "../libs/image";
import { createSlug } from "../libs/slug";
import { prisma } from "../libs/prisma";

export const dramaScrape = async (req: Request, res: Response) => {
  try {
    const { year, month, slug } = req.params;
    const fullSlug = `${year}/${month}/${slug}`;
    const url = `${process.env.ENDPOINT_SCRAPE}/${fullSlug}.html`;

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    );

    const videoUrls: string[] = [];

    await page.setRequestInterception(true);

    page.on("request", (request: HTTPRequest) => {
      // ✅ Typing benar
      const resUrl = request.url();
      if (resUrl.includes(".m3u8") || resUrl.includes("filemoon.to")) {
        if (!videoUrls.includes(resUrl)) {
          videoUrls.push(resUrl);
        }
      }
      request.continue(); // ✅ Wajib panggil continue
    });

    await page.goto(url, { waitUntil: "networkidle2", timeout: 0 });
    await new Promise((resolve) => setTimeout(resolve, 3000)); // ✅ Lebih efisien daripada Promise manual

    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);

    const episodeTitle = $(".blog-post").find("h1.entry-title").text().trim();
    const episodeSlug = createSlug(episodeTitle);
    const dateTime = $(".entry-time").find("time").attr("datetime");
    const paragraph = $(
      "div[style*='box-sizing: border-box'][style*='font-size: 17px']"
    )
      .first()
      .text()
      .trim();
    const title = $("h2").first().text().trim();
    const dramaSlug = createSlug(title);

    const currentEpisodeMatch =
      episodeTitle.match(/Episod\s*(\d+)/i)?.[1] || null;
    const currentEpisode = currentEpisodeMatch
      ? parseInt(currentEpisodeMatch, 10)
      : null;

    const totalEpisodes = $("b:contains('Episod:')")
      .parent()
      .text()
      .replace("Episod:", "")
      .trim();
    const tarikhTayangan = $("b:contains('Tarikh Tayangan:')")
      .parent()
      .text()
      .replace("Tarikh Tayangan:", "")
      .trim();
    const waktuSiaran = $("b:contains('Waktu Siaran:')")
      .parent()
      .text()
      .replace("Waktu Siaran:", "")
      .trim();
    const rangkaian = $("b:contains('Rangkaian:')")
      .parent()
      .text()
      .replace("Rangkaian:", "")
      .trim();
    const pengarah = $("b:contains('Pengarah:')")
      .parent()
      .text()
      .replace("Pengarah:", "")
      .trim();
    const produksi = $("b:contains('Produksi:')")
      .parent()
      .text()
      .replace("Produksi:", "")
      .trim();
    const rawThumbnail = $(".entry-content-wrap").find("img").attr("src") || "";
    const thumbnail = upgradePosterUrl(rawThumbnail);

    // Upsert Drama
    const drama = await prisma.drama.upsert({
      where: { slug: dramaSlug },
      update: {},
      create: {
        title,
        description: paragraph,
        thumbnail,
        tarikhTayangan,
        waktuSiaran,
        rangkaian,
        pengarah,
        produksi,
        slug: dramaSlug,
      },
    });

    if (videoUrls.length > 0) {
      // Upsert Episode
      await prisma.episode.upsert({
        where: { slug: episodeSlug },
        update: {
          title: episodeTitle,
          episodeNum: currentEpisode,
          videoSrc: videoUrls[0],
          publishedAt: dateTime ? new Date(dateTime) : undefined,
          dramaId: drama.id,
        },
        create: {
          title: episodeTitle,
          slug: episodeSlug,
          episodeNum: currentEpisode,
          videoSrc: videoUrls[0],
          publishedAt: dateTime ? new Date(dateTime) : undefined,
          dramaId: drama.id,
        },
      });
    } else {
      console.warn(`Video not found. Skipping episode: ${episodeTitle}`);
    }

    res.json({
      success: true,
      data: {
        drama: {
          episodeTitle,
          title,
          thumbnail,
          dateTime,
          paragraph,
          totalEpisodes,
          tarikhTayangan,
          waktuSiaran,
          rangkaian,
          pengarah,
          produksi,
          videoSrc: videoUrls[0] || null,
          dramaSlug,
          episodeSlug,
          currentEpisode,
        },
      },
    });
  } catch (error) {
    console.error("Scraping Error:", error);
    res.status(500).json({
      success: false,
      message: "Error while scraping data",
    });
  }
};

export const getAllDrama = async (req: Request, res: Response) => {
  try {
    const drama = await prisma.drama.findMany();

    res.json({ success: true, data: drama });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const getDramaBySlug = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;

    if (!slug)
      return void res
        .status(400)
        .json({ success: false, message: "Slug not valid" });

    const drama = await prisma.drama.findUnique({
      where: {
        slug,
      },
      include: {
        episodes: {
          orderBy: {
            episodeNum: "asc",
          },
        },
      },
    });

    if (!drama)
      return void res.status(404).json({
        success: false,
        message: "Drama not found",
      });

    res.json({
      success: true,
      data: drama,
    });
  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
};

export const getDramaTrending = async (req: Request, res: Response) => {
  try {
    const dramas = await prisma.drama.findMany({
      orderBy: { viewCount: "asc" },
      where: { isTrending: true },
      take: 10,
    });

    if (dramas.length < 1)
      return void res
        .status(404)
        .json({ success: false, message: "Drama trending not found!" });

    res.json({ success: true, data: dramas });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export const dramaTrackingView = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;

    if (!slug)
      return void res.status(400).json({
        success: false,
        message: "Slug is not valid!",
      });

    const drama = await prisma.drama.update({
      where: { slug },
      data: {
        viewCount: { increment: 1 },
      },
    });

    res.json({
      success: true,
      data: drama.viewCount,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const getDramaRecomended = async (req: Request, res: Response) => {
  try {
    const dramas = await prisma.drama.findMany({
      where: {
        isRecommended: true,
      },
      take: 10,
    });

    if (dramas.length < 1)
      return void res
        .status(404)
        .json({ success: false, message: "Drama Recomended not found!" });

    res.json({ success: true, data: dramas });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export const searchDrama = async (req: Request, res: Response) => {
  const { q } = req.query;

  if (!q)
    return void res
      .status(400)
      .json({ success: false, message: "Invalid slug" });

  const slugLower = String(q)
    .toLocaleLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  try {
    const drama = await prisma.drama.findUnique({
      where: { slug: slugLower },
    });

    if (!drama)
      return void res.status(404).json({
        success: false,
        message: "Drama not found",
      });

    res.json({ success: true, data: drama });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const latestUpdate = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 14;
    const skip = (page - 1) * limit;

    const [total, episodes] = await Promise.all([
      prisma.episode.count(),
      prisma.episode.findMany({
        orderBy: { publishedAt: "desc" },
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          slug: true,
          episodeNum: true,
          publishedAt: true,
          videoSrc: true,
          drama: {
            select: {
              title: true,
              slug: true,
              thumbnail: true,
            },
          },
        },
      }),
    ]);

    res.json({
      success: true,
      data: episodes,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const getDramaById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    if (!id)
      return void res
        .status(400)
        .json({ success: false, message: "Invalid slug" });

    const drama = await prisma.drama.findUnique({
      where: {
        id,
      },
      include: { episodes: true },
    });

    if (!drama)
      return void res.status(404).json({
        success: false,
        message: "Drama not found",
      });

    res.json({ success: true, data: drama });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
