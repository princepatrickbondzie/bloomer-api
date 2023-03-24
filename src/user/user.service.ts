import { User } from '../shared/schema/user';
import { Model } from 'mongoose';
import { userType } from '../shared/utility/types';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getOnlyUsers(): Promise<User[]> {
    return await this.userModel.find({ type: userType.Client });
  }

  async getEveryUserType(): Promise<User[]> {
    return await this.userModel.find();
  }

  async getSingleUser(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  async deleteUser(id: string): Promise<void> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
