import { Model, Types } from 'mongoose';
import { Service } from '../shared/schema/service';
import { Business } from '../shared/schema/business';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name) private readonly serviceModel: Model<Service>,
    @InjectModel(Business.name) private readonly businessModel: Model<Business>,
  ) {}

  async createServiceByBusiness(
    businessId: string,
    createServiceDto: CreateServiceDto,
  ): Promise<Service> {
    const { duration, name, price } = createServiceDto;
    const business = await this.businessModel.findById(
      new Types.ObjectId(businessId),
    );
    if (!business) throw new NotFoundException('Invalid business');

    return await this.serviceModel.create({
      name,
      price,
      duration,
      businessId: new Types.ObjectId(businessId),
    });
  }

  async getAllServicesByBusiness(businessId: string): Promise<Service[]> {
    return await this.serviceModel.find({
      businessId: new Types.ObjectId(businessId),
    });
  }

  async getSingleServiceByBusiness(
    id: string,
    businessId: string,
  ): Promise<Service> {
    return await this.serviceModel.findOne({
      _id: id,
      businessId: new Types.ObjectId(businessId),
    });
  }

  async updateServiceByBusiness(
    id: string,
    businessId: string,
    updateServiceDto: UpdateServiceDto,
  ): Promise<Service> {
    return await this.serviceModel.findOneAndUpdate(
      {
        _id: id,
        businessId: new Types.ObjectId(businessId),
      },
      updateServiceDto,
      { new: true },
    );
  }

  async deleteServiceByBusiness(id: string, businessId: string): Promise<void> {
    return await this.serviceModel.findOneAndDelete({
      _id: id,
      businessId: new Types.ObjectId(businessId),
    });
  }
}
