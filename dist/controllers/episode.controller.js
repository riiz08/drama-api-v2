"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEpisodeDetail = exports.getEpisodeList = void 0;
const prisma_1 = require("../libs/prisma");
const getEpisodeList = async (req, res) => {
    try {
        const slug = req.params.slug;
        if (!slug)
            return void res.status(404).json({
                success: false,
                message: "Slug not valid!",
            });
        const episodes = await prisma_1.prisma.drama.findUnique({
            where: {
                slug,
            },
            include: { episodes: true },
        });
        res.json({
            success: true,
            data: episodes,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        });
    }
};
exports.getEpisodeList = getEpisodeList;
const getEpisodeDetail = async (req, res) => {
    try {
        const slug = req.params.slug;
        if (!slug)
            return void res.status(404).json({
                success: false,
                message: "Slug not valid!",
            });
        const episode = await prisma_1.prisma.episode.findUnique({
            where: { slug },
        });
        res.json({
            success: true,
            data: episode,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        });
    }
};
exports.getEpisodeDetail = getEpisodeDetail;
