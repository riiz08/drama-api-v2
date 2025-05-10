"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEpisodeDetail = void 0;
const prisma_1 = require("../libs/prisma");
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
