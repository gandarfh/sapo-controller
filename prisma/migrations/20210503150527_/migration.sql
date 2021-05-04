/*
  Warnings:

  - You are about to drop the column `userId` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropIndex
DROP INDEX "Profile.userId_unique";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "Profile.id_unique" ON "Profile"("id");

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
