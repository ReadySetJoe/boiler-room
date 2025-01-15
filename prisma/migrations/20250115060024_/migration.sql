/*
  Warnings:

  - Added the required column `discountPercent` to the `Bundle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceInCents` to the `Bundle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bundle" ADD COLUMN     "discountPercent" INTEGER NOT NULL,
ADD COLUMN     "priceInCents" INTEGER NOT NULL;
