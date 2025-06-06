import { Request, Response } from "express";
import { prisma } from "../libs/prisma";

export const getEpisodeDetail = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug;

    if (!slug)
      return void res.status(404).json({
        success: false,
        message: "Slug not valid!",
      });

    const episode = await prisma.episode.findUnique({
      where: { slug },
    });

    res.json({
      success: true,
      data: episode,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const getEpisodeList = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id)
      return void res.status(404).json({
        success: false,
        message: "Id not valid!",
      });

    const episodeList = await prisma.episode.findMany({
      where: { dramaId: id },
      orderBy: {
        episodeNum: "asc",
      },
    });

    res.json({
      success: true,
      data: episodeList,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
