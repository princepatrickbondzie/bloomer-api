import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Business } from '../shared/schema/business';
import { User } from '../shared/schema/user';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business.name) private readonly businessModel: Model<Business>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createBusiness(user: User, createBusinessDto: CreateBusinessDto) {
    try {
      const { supportEmail, city, contact, name, region } = createBusinessDto;
      const exist = await this.businessModel.findOne({ supportEmail });
      if (exist)
        throw new BadRequestException('Business email already registered.');

      const newBusiness = await this.businessModel.create({
        supportEmail,
        city,
        contact,
        name,
        region,
        user: new Types.ObjectId(user._id),
      });

      await this.userModel.findByIdAndUpdate(
        { _id: new Types.ObjectId(user._id) },
        { business: new Types.ObjectId(newBusiness._id) },
        { new: true },
      );

      return {
        success: true,
        message: 'Business created successfully',
        status: 201,
        data: {
          id: newBusiness._id,
          name: newBusiness.name,
          supportEmail: newBusiness.supportEmail,
          contact: newBusiness.contact,
          city: newBusiness.city,
          region: newBusiness.region,
          active: newBusiness.active,
          approved: newBusiness.approved,
        },
      };
    } catch (err) {
      throw err;
    }
  }

  async getBusinessByUser(id: string, user: User): Promise<Business> {
    return await this.businessModel.findOne({ id, user });
  }

  async getAllBusinesses(): Promise<Business[]> {
    return await this.businessModel.find();
  }

  async getOneBusiness(id: string) {
    return await this.businessModel.findById(id);
  }

  async updateBusiness(
    id: string,
    user: User,
    updateBusinessDto: UpdateBusinessDto,
  ): Promise<Business> {
    const business = this.businessModel.findOne({
      id,
      user: new Types.ObjectId(user._id),
    });

    if (!business) throw new NotFoundException('Business not found');

    return await this.businessModel.findByIdAndUpdate(id, updateBusinessDto, {
      new: true,
    });
  }

  async deleteBusiness(id: string) {
    return await this.businessModel.findByIdAndDelete(id);
  }

  async deactivateBusiness(id: string): Promise<Business> {
    let business = await this.businessModel.findById(id);
    if (!business) {
      throw new NotFoundException('Business not found');
    }

    business.active = !business.active;
    business = await business.save();
    return business;
  }
}
