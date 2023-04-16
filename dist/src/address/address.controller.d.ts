import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from '../shared/schema/address';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    createUserAddress(createAddressDto: CreateAddressDto, req: any): Promise<Address>;
    getAllUserAddress(req: any): Promise<Address[]>;
    getSingleUserAddress(id: string, req: any): Promise<Address>;
    updateUserAddress(id: string, updateAddressDto: UpdateAddressDto, req: any): Promise<Address>;
    deleteUserAddress(id: string, req: any): Promise<void>;
}
