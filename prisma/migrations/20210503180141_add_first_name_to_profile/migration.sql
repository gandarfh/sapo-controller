/*
  Warnings:

  - Added the required column `firstName` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Kamban" DROP CONSTRAINT "Kamban_userId_fkey";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "firstName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Kamban" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
