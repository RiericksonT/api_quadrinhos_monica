/*
  Warnings:

  - Added the required column `rarity` to the `comics` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "summary" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "rarity" TEXT NOT NULL
);
INSERT INTO "new_comics" ("author", "cover", "id", "price", "publisher", "quantity", "summary", "title", "year") SELECT "author", "cover", "id", "price", "publisher", "quantity", "summary", "title", "year" FROM "comics";
DROP TABLE "comics";
ALTER TABLE "new_comics" RENAME TO "comics";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
