/*
  Warnings:

  - Made the column `userId` on table `Kamban` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Kamban" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
CREATE SEQUENCE "kambancolumn_order_seq";
ALTER TABLE "KambanColumn" ALTER COLUMN "order" SET DEFAULT nextval('kambancolumn_order_seq');
ALTER SEQUENCE "kambancolumn_order_seq" OWNED BY "KambanColumn"."order";

-- AlterTable
CREATE SEQUENCE "kambanitem_order_seq";
ALTER TABLE "KambanItem" ALTER COLUMN "order" SET DEFAULT nextval('kambanitem_order_seq');
ALTER SEQUENCE "kambanitem_order_seq" OWNED BY "KambanItem"."order";
