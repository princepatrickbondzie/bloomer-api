"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentStatus = exports.appointmentTypes = exports.userType = void 0;
var userType;
(function (userType) {
    userType["Admin"] = "admin";
    userType["Client"] = "client";
    userType["Business"] = "business";
    userType["SuperAdmin"] = "super_admin";
    userType["CustomerService"] = "customerservice";
})(userType = exports.userType || (exports.userType = {}));
var appointmentTypes;
(function (appointmentTypes) {
    appointmentTypes["InPerson"] = "inperson";
    appointmentTypes["Visit"] = "visit";
})(appointmentTypes = exports.appointmentTypes || (exports.appointmentTypes = {}));
var appointmentStatus;
(function (appointmentStatus) {
    appointmentStatus["NotDue"] = "notDue";
    appointmentStatus["Pending"] = "pending";
    appointmentStatus["Cancelled"] = "cancelled";
    appointmentStatus["Confirmed"] = "confirmed";
    appointmentStatus["Completed"] = "completed";
    appointmentStatus["AwaitingPayment"] = "awaitingPayment";
})(appointmentStatus = exports.appointmentStatus || (exports.appointmentStatus = {}));
//# sourceMappingURL=types.js.map