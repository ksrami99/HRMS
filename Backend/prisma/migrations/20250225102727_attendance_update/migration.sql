/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Attendance` table. All the data in the column will be lost.
  - Made the column `checkIn` on table `Attendance` required. This step will fail if there are existing NULL values in that column.
  - Made the column `checkOut` on table `Attendance` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Attendance_date_key";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "createdAt",
DROP COLUMN "date",
DROP COLUMN "status",
DROP COLUMN "updatedAt",
ALTER COLUMN "checkIn" SET NOT NULL,
ALTER COLUMN "checkIn" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "checkOut" SET NOT NULL;

-- DropEnum
DROP TYPE "AttendanceStatus";
