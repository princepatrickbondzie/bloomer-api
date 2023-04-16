export declare enum userType {
    Admin = "admin",
    Client = "client",
    Business = "business",
    SuperAdmin = "super_admin",
    CustomerService = "customerservice"
}
export declare enum appointmentTypes {
    InPerson = "inperson",
    Visit = "visit"
}
export declare enum appointmentStatus {
    NotDue = "notDue",
    Pending = "pending",
    Cancelled = "cancelled",
    Confirmed = "confirmed",
    Completed = "completed",
    AwaitingPayment = "awaitingPayment"
}
export type Response = {
    success: boolean;
    message: string;
    status: number;
    data?: object | null;
};
