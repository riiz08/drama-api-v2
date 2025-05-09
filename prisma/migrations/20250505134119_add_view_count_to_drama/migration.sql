-- AlterTable
ALTER TABLE "Drama" ADD COLUMN     "isRecommended" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isTrending" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "DramaView" (
    "id" TEXT NOT NULL,
    "dramaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DramaView_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DramaView" ADD CONSTRAINT "DramaView_dramaId_fkey" FOREIGN KEY ("dramaId") REFERENCES "Drama"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
