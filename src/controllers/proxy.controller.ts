import axios from "axios";
import { Request, Response } from "express";

export const proxy = async (req: Request, res: Response) => {
  const targetUrl = req.query.url as string;
  if (!targetUrl) {
    return void res
      .status(400)
      .json({ success: false, message: "Invalid URL" });
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        // Cache-Control header agar Cloudflare cache file
        "Cache-Control": "public, max-age=10800", // Cache selama 3 jam
      },
      responseType: "stream", // ⬅ penting untuk streaming HLS
    });

    res.set(response.headers); // Menyalin header response asli
    res.set("Cache-Control", "public, max-age=10800"); // Pastikan Cloudflare meng-cache
    response.data.pipe(res); // Forward langsung ke client
  } catch (error: any) {
    console.error("Proxy error:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch target URL" });
  }
};

export const proxyV2 = async (req: Request, res: Response) => {
  const targetUrl = req.query.url as string;
  if (!targetUrl) {
    return void res
      .status(400)
      .json({ success: false, message: "Invalid URL" });
  }

  try {
    const response = await axios.get(targetUrl, {
      headers: {
        accept: "*/*",
        "accept-language":
          "id-ID,id;q=0.9,en-GB;q=0.8,en;q=0.7,ar-EG;q=0.6,ar;q=0.5,fil-PH;q=0.4,fil;q=0.3,en-US;q=0.2",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        Referer: "https://kepalabapak.upns.blog/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Cache-Control": "public, max-age=10800",
      },
      responseType: "text", // 🔄 Ganti dari "stream" agar bisa diproses
    });

    const basePath = targetUrl.substring(0, targetUrl.lastIndexOf("/") + 1); // Dapatkan prefix URL
    const originalText = response.data as string;

    // Rewrite semua baris .txt ke URL absolut
    const rewrittenText = originalText
      .split("\n")
      .map((line: string) =>
        line.trim().endsWith(".txt") ? basePath + line.trim() : line
      )
      .join("\n");

    // Set header + kirim hasil ke client
    res.set("Content-Type", "application/vnd.apple.mpegurl");
    res.set("Cache-Control", "public, max-age=10800");
    res.send(rewrittenText);
  } catch (error: any) {
    console.error("Proxy error:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch target URL" });
  }
};
