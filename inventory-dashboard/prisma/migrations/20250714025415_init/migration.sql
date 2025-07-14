-- CreateTable
CREATE TABLE "Toros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studCode" TEXT NOT NULL,
    "studName" TEXT NOT NULL,
    "stockDosis" INTEGER NOT NULL,
    "ubicacionStock" TEXT NOT NULL,
    "ultimoNumVenta" INTEGER NOT NULL,
    "ultimoPrecioVenta" REAL NOT NULL,
    "ultimaFechaVenta" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Ventas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaVenta" DATETIME NOT NULL,
    "razonSocialCliente" TEXT NOT NULL,
    "rucCliente" TEXT NOT NULL,
    "studId" INTEGER NOT NULL,
    "numDosis" INTEGER NOT NULL,
    "precioUnitario" REAL NOT NULL,
    "montoTotal" REAL NOT NULL,
    "pagado" BOOLEAN NOT NULL,
    CONSTRAINT "Ventas_studId_fkey" FOREIGN KEY ("studId") REFERENCES "Toros" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Toros_studCode_key" ON "Toros"("studCode");
