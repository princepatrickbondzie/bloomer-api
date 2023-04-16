import { CreateServiceDto } from './create-service.dto';
declare const UpdateServiceDto_base: import("@nestjs/common").Type<Partial<CreateServiceDto>>;
export declare class UpdateServiceDto extends UpdateServiceDto_base {
    readonly name: string;
    readonly price: number;
    readonly duration: number;
}
export {};
