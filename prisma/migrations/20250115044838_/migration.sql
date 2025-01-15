/*
  Warnings:

  - A unique constraint covering the columns `[steamId]` on the table `Bundle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `steamId` to the `Bundle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bundle" ADD COLUMN     "steamId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bundle_steamId_key" ON "Bundle"("steamId");
