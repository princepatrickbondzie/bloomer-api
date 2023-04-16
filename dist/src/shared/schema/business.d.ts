import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user';
import { Service } from './service';
import { Appointment } from './appointment';
import { Category } from './category';
import { Address } from './address';
export declare class Schedules {
    date: Date;
    hours: string[];
}
export declare class PrimaryImage {
    publicId: string;
    folder: string;
    url: string;
    format: string;
    createdAt: string;
}
export declare class Business extends Document {
    name: string;
    supportEmail: string;
    contact: string;
    primaryImage: PrimaryImage;
    otherImages: PrimaryImage[];
    city: string;
    region: string;
    active: boolean;
    approved: boolean;
    schedules?: Schedules[];
    services?: Service[];
    address?: Address;
    user: User;
    categories?: Category[];
    appointments?: Appointment[];
}
export declare const BusinessSchema: mongoose.Schema<Business, mongoose.Model<Business, any, any, any, Document<unknown, any, Business> & Omit<Business & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Business, Document<unknown, {}, mongoose.FlatRecord<Business>> & Omit<mongoose.FlatRecord<Business> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
