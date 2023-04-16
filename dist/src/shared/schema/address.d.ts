import { User } from './user';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class Address extends Document {
    fullname: string;
    mobile: string;
    geoCode: string;
    landmark: string;
    user: User;
}
export declare const AddressSchema: mongoose.Schema<Address, mongoose.Model<Address, any, any, any, Document<unknown, any, Address> & Omit<Address & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Address, Document<unknown, {}, mongoose.FlatRecord<Address>> & Omit<mongoose.FlatRecord<Address> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
