/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_id_email_fkey";

-- DropIndex
DROP INDEX "Profile_id_email_unique";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
