import { PrimaryImage } from '../../shared/schema/business';
export declare class CreateBusinessDto {
    name: string;
    supportEmail: string;
    contact: string;
    primaryImage: PrimaryImage;
    otherImages?: PrimaryImage[];
    city: string;
    region: string;
    categories?: string[];
}
