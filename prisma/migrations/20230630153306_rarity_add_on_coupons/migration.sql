/*
  Warnings:

  - Added the required column `rarity` to the `coupons` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_coupons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "discount" REAL NOT NULL,
    "expires" DATETIME NOT NULL,
    "comicId" INTEGER NOT NULL,
    "rarity" TEXT NOT NULL,
    CONSTRAINT "coupons_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_coupons" ("code", "comicId", "discount", "expires", "id") SELECT "code", "comicId", "discount", "expires", "id" FROM "coupons";
DROP TABLE "coupons";
ALTER TABLE "new_coupons" RENAME TO "coupons";
CREATE UNIQUE INDEX "coupons_code_key" ON "coupons"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
