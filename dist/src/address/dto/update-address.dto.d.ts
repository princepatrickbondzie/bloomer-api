import { CreateAddressDto } from './create-address.dto';
declare const UpdateAddressDto_base: import("@nestjs/common").Type<Partial<CreateAddressDto>>;
export declare class UpdateAddressDto extends UpdateAddressDto_base {
    readonly fullname?: string;
    readonly mobile?: string;
    readonly geoCode?: string;
    readonly landmark?: string;
}
export {};
