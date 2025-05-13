"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxyV2 = exports.proxy = void 0;
const axios_1 = __importDefault(require("axios"));
const proxy = async (req, res) => {
    const targetUrl = req.query.url;
    if (!targetUrl) {
        return void res
            .status(400)
            .json({ success: false, message: "Invalid URL" });
    }
    try {
        const response = await axios_1.default.get(targetUrl, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                // Cache-Control header agar Cloudflare cache file
                "Cache-Control": "public, max-age=10800", // Cache selama 3 jam
            },
            responseType: "stream", // ⬅ penting untuk streaming HLS
        });
        res.set(response.headers); // Menyalin header response asli
        res.set("Cache-Control", "public, max-age=10800"); // Pastikan Cloudflare meng-cache
        response.data.pipe(res); // Forward langsung ke client
    }
    catch (error) {
        console.error("Proxy error:", error.message);
        res
            .status(500)
            .json({ success: false, message: "Failed to fetch target URL" });
    }
};
exports.proxy = proxy;
const proxyV2 = async (req, res) => {
    const targetUrl = req.query.url;
    if (!targetUrl) {
        return void res
            .status(400)
            .json({ success: false, message: "Invalid URL" });
    }
    try {
        const response = await axios_1.default.get(targetUrl, {
            headers: {
                accept: "*/*",
                "accept-language": "id-ID,id;q=0.9,en-GB;q=0.8,en;q=0.7,ar-EG;q=0.6,ar;q=0.5,fil-PH;q=0.4,fil;q=0.3,en-US;q=0.2",
                priority: "u=1, i",
                "sec-ch-ua": '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
                "sec-ch-ua-mobile": "?1",
                "sec-ch-ua-platform": '"Android"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                Referer: "https://kepalabapak.upns.blog/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "Cache-Control": "public, max-age=10800",
            },
            responseType: "text",
        });
        const basePath = targetUrl.substring(0, targetUrl.lastIndexOf("/") + 1);
        const originalText = response.data;
        const rewrittenText = originalText
            .split("\n")
            .map((line) => {
            const trimmed = line.trim();
            // Rewrite EXT-X-MAP URI
            if (trimmed.startsWith("#EXT-X-MAP:URI=")) {
                return trimmed.replace(/URI="([^"]+)"/, (_, uri) => {
                    if (/^https?:\/\//.test(uri))
                        return `URI="${uri}"`; // sudah absolut
                    return `URI="${basePath}${uri}"`; // ubah ke absolut
                });
            }
            // Rewrite segmen yang relatif menjadi absolut
            if (trimmed &&
                !trimmed.startsWith("#") &&
                !/^https?:\/\//.test(trimmed)) {
                return `${basePath}${trimmed}`;
            }
            return line;
        })
            .join("\n");
        res.set("Content-Type", "application/vnd.apple.mpegurl");
        res.set("Cache-Control", "public, max-age=10800");
        res.send(rewrittenText);
    }
    catch (error) {
        console.error("Proxy error:", error.message);
        res
            .status(500)
            .json({ success: false, message: "Failed to fetch target URL" });
    }
};
exports.proxyV2 = proxyV2;
