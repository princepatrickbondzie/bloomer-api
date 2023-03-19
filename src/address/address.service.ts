import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Address } from '../shared/schema/address';
import { User } from '../shared/schema/user';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private readonly addressModel: Model<Address>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUserAddress(
    createAddressDto: CreateAddressDto,
    user: User,
  ): Promise<Address> {
    const { fullname, geoCode, landmark, mobile } = createAddressDto;

    const address = await this.addressModel.create({
      fullname,
      geoCode,
      landmark,
      mobile,
      user: new Types.ObjectId(user._id),
    });

    user.address.push(address._id);

    await this.userModel.updateOne(
      { _id: new Types.ObjectId(user._id) },
      { $set: { ...user } },
    );

    return address;
  }

  async getAllUserAddress(user: User): Promise<Address[]> {
    return await this.addressModel.findOne({ user }).populate({ path: 'user' });
  }

  async getSingleUserAddress(id: string, user: User): Promise<Address> {
    return await this.addressModel
      .findOne({ id, user })
      .populate({ path: 'user' });
  }

  // async getShopAddress() {}

  async updateUserAddress(
    id: string,
    user: User,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    const { fullname, geoCode, landmark, mobile } = updateAddressDto;

    return await this.addressModel.findOneAndUpdate(
      { id, user },
      { fullname, geoCode, landmark, mobile },
      { new: true },
    );
  }

  async deleteUserAddress(id: string, user: User): Promise<void> {
    return await this.addressModel.findOneAndDelete({ id, user });
  }
}
