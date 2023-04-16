import { Model } from 'mongoose';
import { Service } from '../shared/schema/service';
import { Business } from '../shared/schema/business';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesService {
    private readonly serviceModel;
    private readonly businessModel;
    constructor(serviceModel: Model<Service>, businessModel: Model<Business>);
    createServiceByBusiness(businessId: string, createServiceDto: CreateServiceDto): Promise<Service>;
    getAllServicesByBusiness(businessId: string): Promise<Service[]>;
    getSingleServiceByBusiness(id: string, businessId: string): Promise<Service>;
    updateServiceByBusiness(id: string, businessId: string, updateServiceDto: UpdateServiceDto): Promise<Service>;
    deleteServiceByBusiness(id: string, businessId: string): Promise<void>;
}
