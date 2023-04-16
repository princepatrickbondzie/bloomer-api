import { Document } from 'mongoose';
import { Address } from './address';
import { Business } from './business';
import * as mongoose from 'mongoose';
import { Appointment } from './appointment';
export declare class User extends Document {
    firstname: string;
    lastname: string;
    email: string;
    contact: string;
    dob: Date;
    password: string;
    type: string;
    active: boolean;
    isVerified: boolean;
    address?: Address[];
    otp: string;
    otpExpiryTime: Date;
    appointments?: Appointment;
    business?: Business;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, Document<unknown, any, User> & Omit<User & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
