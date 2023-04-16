import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    createServiceByBusiness(createServiceDto: CreateServiceDto, businessId: string): Promise<import("../shared/schema/service").Service>;
    getAllServicesByBusiness(businessId: string): Promise<import("../shared/schema/service").Service[]>;
    getSingleServiceByBusiness(id: string, businessId: string): Promise<import("../shared/schema/service").Service>;
    updateServiceByBusiness(id: string, businessId: string, updateServiceDto: UpdateServiceDto): Promise<import("../shared/schema/service").Service>;
    deleteServiceByBusiness(id: string, businessId: string): Promise<void>;
}
