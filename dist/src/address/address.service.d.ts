import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Model } from 'mongoose';
import { Address } from '../shared/schema/address';
import { User } from '../shared/schema/user';
export declare class AddressService {
    private readonly addressModel;
    private readonly userModel;
    constructor(addressModel: Model<Address>, userModel: Model<User>);
    createUserAddress(createAddressDto: CreateAddressDto, user: User): Promise<Address>;
    getAllUserAddress(user: User): Promise<Address[]>;
    getSingleUserAddress(id: string, user: User): Promise<Address>;
    updateUserAddress(id: string, user: User, updateAddressDto: UpdateAddressDto): Promise<Address>;
    deleteUserAddress(id: string, user: User): Promise<void>;
}
