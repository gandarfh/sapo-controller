/*
  Warnings:

  - Made the column `name` on table `Kamban` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Kamban` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Kamban` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `KambanColumn` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fatherId` on table `KambanColumn` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order` on table `KambanColumn` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `KambanColumn` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `KambanItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `KambanItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `order` on table `KambanItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `columnId` on table `KambanItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tagId` on table `KambanItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `KambanItem` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `color` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Kamban" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "KambanColumn" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "fatherId" SET NOT NULL,
ALTER COLUMN "order" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "KambanItem" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "order" SET NOT NULL,
ALTER COLUMN "columnId" SET NOT NULL,
ALTER COLUMN "tagId" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "color" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
