/*
  Warnings:

  - You are about to drop the `order_items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "order_items";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_ComicsToOrders" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ComicsToOrders_A_fkey" FOREIGN KEY ("A") REFERENCES "comics" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ComicsToOrders_B_fkey" FOREIGN KEY ("B") REFERENCES "orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComicsToOrders_AB_unique" ON "_ComicsToOrders"("A", "B");

-- CreateIndex
CREATE INDEX "_ComicsToOrders_B_index" ON "_ComicsToOrders"("B");
