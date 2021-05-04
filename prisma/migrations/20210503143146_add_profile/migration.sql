/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `numberStreet` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `zipcode` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Kamban" DROP CONSTRAINT "Kamban_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "street",
DROP COLUMN "numberStreet",
DROP COLUMN "neighborhood",
DROP COLUMN "city",
DROP COLUMN "state",
DROP COLUMN "country",
DROP COLUMN "zipcode",
ADD PRIMARY KEY ("id", "email");

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "numberStreet" INTEGER NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "role" "Role"[],
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_email_unique" ON "Profile"("id", "email");

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("id", "email") REFERENCES "User"("id", "email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kamban" ADD FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
