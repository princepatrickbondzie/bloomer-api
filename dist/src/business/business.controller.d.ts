/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Business } from '../shared/schema/business';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { UpdateSchedules } from './dto/update-schedules.dto';
export declare class BusinessController {
    private readonly businessService;
    constructor(businessService: BusinessService);
    createBusiness(createBusinessDto: CreateBusinessDto, req: any): Promise<{
        success: boolean;
        message: string;
        status: number;
        data: {
            id: any;
            name: string;
            supportEmail: string;
            contact: string;
            city: string;
            region: string;
            active: boolean;
            approved: boolean;
        };
    }>;
    getBusinessByUser(req: any, id: string): Promise<Business>;
    getOneBusiness(id: string): Promise<Business>;
    getAllBusinesses(): Promise<Business[]>;
    getBusinessByCategory(category: string): Promise<Business[]>;
    updateBusiness(id: string, updateBusinessDto: UpdateBusinessDto, req: any): Promise<Business>;
    updateBusinessSchedules(id: string, req: any, updateSchedules: UpdateSchedules): Promise<Business>;
    deleteBusiness(id: string): Promise<import("mongoose").Document<unknown, {}, Business> & Omit<Business & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deactivateBusiness(id: string): Promise<Business>;
}
