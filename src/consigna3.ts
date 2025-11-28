//Tipos Literales y Enum
let orderStatus: "pending" | "shipped" | "delivered";

orderStatus = "shipped";
console.log(orderStatus);

enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`${level}: ${message}`);
}

logMessage(LogLevel.Info, "Mensaje de informacion");
