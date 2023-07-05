/*
  Warnings:

  - You are about to drop the column `comicId` on the `coupons` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_coupons" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "discount" REAL NOT NULL,
    "expires" DATETIME NOT NULL,
    "rarity" TEXT NOT NULL
);
INSERT INTO "new_coupons" ("code", "discount", "expires", "id", "rarity") SELECT "code", "discount", "expires", "id", "rarity" FROM "coupons";
DROP TABLE "coupons";
ALTER TABLE "new_coupons" RENAME TO "coupons";
CREATE UNIQUE INDEX "coupons_code_key" ON "coupons"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
