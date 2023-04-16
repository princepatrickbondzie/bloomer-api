import { Model } from 'mongoose';
import { Address } from '../schema/address';
export declare class AddressRepository {
    private readonly addressModel;
    constructor(addressModel: Model<Address>);
    create(query: any): Promise<Address>;
    findOne(query: any): Promise<Address>;
    update(id: string, query: any): Promise<Address>;
}
