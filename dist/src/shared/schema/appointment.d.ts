import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user';
import { Service } from './service';
import { Business } from './business';
export declare class ScheduleData {
    date: Date;
    time: string;
}
export declare class Appointment extends Document {
    services: Service[];
    serviceCost: number;
    totalDuration: number;
    type: string;
    visitCharge?: number;
    discount?: number;
    amountToPay: number;
    schedule: ScheduleData;
    status: string;
    clientComment: string;
    businessComment: string;
    user: User;
    business: Business;
}
export declare const AppointmentSchema: mongoose.Schema<Appointment, mongoose.Model<Appointment, any, any, any, Document<unknown, any, Appointment> & Omit<Appointment & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Appointment, Document<unknown, {}, mongoose.FlatRecord<Appointment>> & Omit<mongoose.FlatRecord<Appointment> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
