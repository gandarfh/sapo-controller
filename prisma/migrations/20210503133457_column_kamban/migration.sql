-- CreateTable
CREATE TABLE "KambanColumn" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "fatherId" TEXT,
    "order" INTEGER,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KambanColumn.name_unique" ON "KambanColumn"("name");

-- CreateIndex
CREATE UNIQUE INDEX "KambanColumn.order_unique" ON "KambanColumn"("order");

-- AddForeignKey
ALTER TABLE "KambanColumn" ADD FOREIGN KEY ("fatherId") REFERENCES "Kamban"("id") ON DELETE SET NULL ON UPDATE CASCADE;
