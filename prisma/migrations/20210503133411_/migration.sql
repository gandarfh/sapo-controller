-- CreateTable
CREATE TABLE "Kamban" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kamban.name_unique" ON "Kamban"("name");

-- AddForeignKey
ALTER TABLE "Kamban" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
