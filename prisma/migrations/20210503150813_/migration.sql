/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Profile.id_unique";

-- CreateIndex
CREATE UNIQUE INDEX "Profile.email_unique" ON "Profile"("email");
