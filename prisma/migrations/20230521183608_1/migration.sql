-- CreateEnum
CREATE TYPE "categoryEnum" AS ENUM ('Personal', 'Work', 'Home', 'Goal');

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" "categoryEnum" NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
