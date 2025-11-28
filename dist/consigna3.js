"use strict";
//Tipos Literales y Enum
let orderStatus;
orderStatus = "shipped";
console.log(orderStatus);
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "Info";
    LogLevel["Warning"] = "Warning";
    LogLevel["Error"] = "Error";
})(LogLevel || (LogLevel = {}));
function logMessage(level, message) {
    console.log(`${level}: ${message}`);
}
logMessage(LogLevel.Info, "Mensaje de informacion");
