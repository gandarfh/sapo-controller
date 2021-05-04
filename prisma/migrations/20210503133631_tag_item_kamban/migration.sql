-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KambanItem" ADD FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
