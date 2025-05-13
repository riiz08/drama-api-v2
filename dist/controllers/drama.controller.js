"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDramaById = exports.latestUpdate = exports.searchDrama = exports.getDramaRecomended = exports.dramaTrackingView = exports.getDramaTrending = exports.getDramaBySlug = exports.getAllDrama = exports.dramaScrape = void 0;
const cheerio = __importStar(require("cheerio"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const image_1 = require("../libs/image");
const slug_1 = require("../libs/slug");
const prisma_1 = require("../libs/prisma");
const dramaScrape = async (req, res) => {
    try {
        const { year, month, slug } = req.params;
        const fullSlug = `${year}/${month}/${slug}`;
        const url = `${process.env.ENDPOINT_SCRAPE}/${fullSlug}.html`;
        const browser = await puppeteer_1.default.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });
        const page = await browser.newPage();
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");
        const videoUrls = [];
        await page.setRequestInterception(true);
        page.on("request", (request) => {
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
        const episodeSlug = (0, slug_1.createSlug)(episodeTitle);
        const dateTime = $(".entry-time").find("time").attr("datetime");
        const paragraph = $("div[style*='box-sizing: border-box'][style*='font-size: 17px']")
            .first()
            .text()
            .trim();
        const title = $("h2").first().text().trim();
        const dramaSlug = (0, slug_1.createSlug)(title);
        const currentEpisodeMatch = episodeTitle.match(/Episod\s*(\d+)/i)?.[1] || null;
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
        const thumbnail = (0, image_1.upgradePosterUrl)(rawThumbnail);
        // Upsert Drama
        const drama = await prisma_1.prisma.drama.upsert({
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
            await prisma_1.prisma.episode.upsert({
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
        }
        else {
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
    }
    catch (error) {
        console.error("Scraping Error:", error);
        res.status(500).json({
            success: false,
            message: "Error while scraping data",
        });
    }
};
exports.dramaScrape = dramaScrape;
const getAllDrama = async (req, res) => {
    try {
        const drama = await prisma_1.prisma.drama.findMany();
        res.json({ success: true, data: drama });
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
};
exports.getAllDrama = getAllDrama;
const getDramaBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;
        if (!slug)
            return void res
                .status(400)
                .json({ success: false, message: "Slug not valid" });
        const drama = await prisma_1.prisma.drama.findUnique({
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
    }
    catch (err) {
        res.json({
            success: false,
            message: err,
        });
    }
};
exports.getDramaBySlug = getDramaBySlug;
const getDramaTrending = async (req, res) => {
    try {
        const dramas = await prisma_1.prisma.drama.findMany({
            orderBy: { viewCount: "asc" },
            where: { isTrending: true },
            take: 10,
        });
        if (dramas.length < 1)
            return void res
                .status(404)
                .json({ success: false, message: "Drama trending not found!" });
        res.json({ success: true, data: dramas });
    }
    catch (error) {
        res.json({ success: false, message: error });
    }
};
exports.getDramaTrending = getDramaTrending;
const dramaTrackingView = async (req, res) => {
    try {
        const slug = req.params.slug;
        if (!slug)
            return void res.status(400).json({
                success: false,
                message: "Slug is not valid!",
            });
        const drama = await prisma_1.prisma.drama.update({
            where: { slug },
            data: {
                viewCount: { increment: 1 },
            },
        });
        res.json({
            success: true,
            data: drama.viewCount,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        });
    }
};
exports.dramaTrackingView = dramaTrackingView;
const getDramaRecomended = async (req, res) => {
    try {
        const dramas = await prisma_1.prisma.drama.findMany({
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
    }
    catch (error) {
        res.json({ success: false, message: error });
    }
};
exports.getDramaRecomended = getDramaRecomended;
const searchDrama = async (req, res) => {
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
        const drama = await prisma_1.prisma.drama.findUnique({
            where: { slug: slugLower },
        });
        if (!drama)
            return void res.status(404).json({
                success: false,
                message: "Drama not found",
            });
        res.json({ success: true, data: drama });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error });
    }
};
exports.searchDrama = searchDrama;
const latestUpdate = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 14;
        const skip = (page - 1) * limit;
        const [total, episodes] = await Promise.all([
            prisma_1.prisma.episode.count(),
            prisma_1.prisma.episode.findMany({
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
    }
    catch (error) {
        res.status(500).json({ success: false, message: error });
    }
};
exports.latestUpdate = latestUpdate;
const getDramaById = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id)
            return void res
                .status(400)
                .json({ success: false, message: "Invalid slug" });
        const drama = await prisma_1.prisma.drama.findUnique({
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
    }
    catch (error) {
        res.status(500).json({ success: false, message: error });
    }
};
exports.getDramaById = getDramaById;
