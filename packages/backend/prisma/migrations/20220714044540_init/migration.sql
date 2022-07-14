-- CreateTable
CREATE TABLE "userLogin" (
    "userID" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "addressName" TEXT,
    "nickName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "userLogin_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "receipt" (
    "settlementId" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "sumMoney" INTEGER NOT NULL,
    "genre" TEXT,
    "storeName" TEXT,
    "memo" TEXT,
    "useDetails" TEXT,

    CONSTRAINT "receipt_pkey" PRIMARY KEY ("settlementId")
);

-- CreateTable
CREATE TABLE "receiptDetails" (
    "productsName" TEXT NOT NULL,
    "settlementId" TEXT NOT NULL,
    "unitprice" INTEGER NOT NULL,
    "quantity" TEXT NOT NULL,
    "sumMoney" INTEGER NOT NULL,
    "discount" INTEGER,
    "tax" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "receiptDetails_pkey" PRIMARY KEY ("productsName","settlementId")
);

-- AddForeignKey
ALTER TABLE "receipt" ADD CONSTRAINT "receipt_userID_fkey" FOREIGN KEY ("userID") REFERENCES "userLogin"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receiptDetails" ADD CONSTRAINT "receiptDetails_settlementId_fkey" FOREIGN KEY ("settlementId") REFERENCES "receipt"("settlementId") ON DELETE RESTRICT ON UPDATE CASCADE;
