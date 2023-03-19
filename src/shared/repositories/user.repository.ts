import { Model } from 'mongoose';
import { User } from '../schema/user';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(Query: any) {
    return this.userModel.create(Query);
  }

  async findOne(Query: any) {
    return this.userModel.findOne(Query);
  }
}
