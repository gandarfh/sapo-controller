-- CreateTable
CREATE TABLE "KambanItem" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "order" INTEGER,
    "columnId" TEXT,
    "tagId" TEXT,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KambanItem.order_unique" ON "KambanItem"("order");

-- AddForeignKey
ALTER TABLE "KambanItem" ADD FOREIGN KEY ("columnId") REFERENCES "KambanColumn"("id") ON DELETE SET NULL ON UPDATE CASCADE;
