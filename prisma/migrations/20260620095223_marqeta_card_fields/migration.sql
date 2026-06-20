/*
  Warnings:

  - A unique constraint covering the columns `[marqetaId]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "cardProductToken" TEXT,
ADD COLUMN     "marqetaUserToken" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Card_marqetaId_key" ON "Card"("marqetaId");
