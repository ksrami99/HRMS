/*
  Warnings:

  - You are about to drop the column `status` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "status";

-- DropEnum
DROP TYPE "EmployeeStatus";
