/*
  Warnings:

  - You are about to drop the `receipt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `receiptDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userLogin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "receipt" DROP CONSTRAINT "receipt_userID_fkey";

-- DropForeignKey
ALTER TABLE "receiptDetails" DROP CONSTRAINT "receiptDetails_settlementId_fkey";

-- DropTable
DROP TABLE "receipt";

-- DropTable
DROP TABLE "receiptDetails";

-- DropTable
DROP TABLE "userLogin";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "addressName" TEXT,
    "nickName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receipt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sumMoney" INTEGER NOT NULL,
    "genre" TEXT,
    "storeName" TEXT,
    "memo" TEXT,
    "useDetails" TEXT,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceiptDetails" (
    "productsName" TEXT NOT NULL,
    "settlementId" TEXT NOT NULL,
    "unitprice" INTEGER NOT NULL,
    "quantity" TEXT NOT NULL,
    "sumMoney" INTEGER NOT NULL,
    "discount" INTEGER,
    "tax" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "ReceiptDetails_pkey" PRIMARY KEY ("productsName","settlementId")
);

-- AddForeignKey
ALTER TABLE "Receipt" ADD CONSTRAINT "Receipt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceiptDetails" ADD CONSTRAINT "ReceiptDetails_settlementId_fkey" FOREIGN KEY ("settlementId") REFERENCES "Receipt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
