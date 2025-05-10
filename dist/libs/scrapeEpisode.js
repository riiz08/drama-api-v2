"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeEpisode = scrapeEpisode;
async function scrapeEpisode(url) {
    const trimmedUrl = url
        .replace("https://blog.basahjeruk.info/", "")
        .replace(".html", "");
    const endpoint = `http://api.mangeakkk.my.id/api/v2/drama/scrape/${trimmedUrl}`;
    const res = await fetch(endpoint);
    if (!res.ok) {
        throw new Error(`Status gagal ${res.status} untuk ${trimmedUrl}`);
    }
    console.log(`✅ Episode berhasil di-scrape: ${trimmedUrl}`);
}
