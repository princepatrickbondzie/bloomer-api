import { CreateBusinessDto } from './create-business.dto';
declare const UpdateBusinessDto_base: import("@nestjs/common").Type<Partial<CreateBusinessDto>>;
export declare class UpdateBusinessDto extends UpdateBusinessDto_base {
    readonly name: string;
    readonly supportEmail: string;
    readonly contact: string;
    readonly city: string;
    readonly region: string;
    readonly categories?: string[];
}
export {};
