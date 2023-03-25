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
import { UpdateSchedules } from './dto/update-schedules.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business.name) private readonly businessModel: Model<Business>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createBusiness(user: User, createBusinessDto: CreateBusinessDto) {
    try {
      const { supportEmail, city, contact, name, region, categories } =
        createBusinessDto;
      const exist = await this.businessModel.findOne({ supportEmail });
      if (exist)
        throw new BadRequestException('Business email already registered.');

      //not working, need a better fix
      // let cts = [];
      // for (const c of categories) {
      //   cts.push(new Types.ObjectId(c));
      // }

      const newBusiness = await this.businessModel.create({
        supportEmail,
        city,
        contact,
        name,
        region,
        user: new Types.ObjectId(user._id),
        categories,
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
    return await this.businessModel
      .findOne({ _id: id, user })
      .populate({ path: 'user' })
      .populate({ path: 'categories' });
    // .populate({ path: 'services' })
    // .populate({ path: 'appointments' });
  }

  //issues here
  async getBusinessByCategory(category: string): Promise<Business[]> {
    const business = await this.businessModel
      .find()
      .populate({ path: 'user' })
      .populate({ path: 'categories' });
    // console.log(business);

    return business.filter((b) =>
      b.categories.some((c) => c.name === category),
    );
  }

  async getAllBusinesses(): Promise<Business[]> {
    return await this.businessModel
      .find()
      .populate({ path: 'user' })
      .populate({ path: 'categories' });
  }

  async getOneBusiness(id: string) {
    return await this.businessModel
      .findById(id)
      .populate({ path: 'user' })
      .populate({ path: 'categories' });
  }

  async updateBusiness(
    id: string,
    user: User,
    updateBusinessDto: UpdateBusinessDto,
  ): Promise<Business> {
    const { city, contact, name, region, supportEmail, categories } =
      updateBusinessDto;

    const business = this.businessModel.findOne({
      id,
      user: new Types.ObjectId(user._id),
    });
    if (!business) throw new NotFoundException('Business not found');

    // let cts = [];
    // for (const c of categories) {
    //   cts.push(new Types.ObjectId(c));
    // }

    // categories.filter((ctg) => cts.push())

    return await this.businessModel.findByIdAndUpdate(
      id,
      { city, contact, name, region, supportEmail, categories },
      {
        new: true,
      },
    );
  }

  async updateBusinessSchedules(
    id: string,
    user: User,
    updateSchedules: UpdateSchedules,
  ): Promise<Business> {
    try {
      const business = await this.businessModel.findOneAndUpdate(
        { _id: id, user: new Types.ObjectId(user._id) },
        { $addToSet: { schedules: updateSchedules } },
        { new: true },
      );

      return business;
    } catch (err) {
      throw new BadRequestException();
    }
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
