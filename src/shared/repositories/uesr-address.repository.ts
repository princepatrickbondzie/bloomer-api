import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Address } from '../schema/address';

@Injectable()
export class AddressRepository {
  constructor(
    @InjectModel(Address.name)
    private readonly addressModel: Model<Address>,
  ) {}

  async create(query: any): Promise<Address> {
    return await this.addressModel.create(query);
  }

  async findOne(query: any): Promise<Address> {
    return await this.addressModel.findOne(query);
  }

  async update(id: string, query: any): Promise<Address> {
    return await this.addressModel.findByIdAndUpdate(id, query, {
      new: true,
    });
  }
}
