import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAppDto } from './dtos/create-app.dto';
import { UpdateAppDto } from './dtos/update-app.dto';
import { App } from '../shared/schema/app';

@Injectable()
export class AppsService {
  constructor(@InjectModel(App.name) private readonly appModel: Model<App>) {}

  async createThirdPartyApp(appDto: CreateAppDto): Promise<App> {
    try {
      const { name, supportMail } = appDto;

      return await this.appModel.create({ name, supportMail, apiKey: uuid() });
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('app name is aleady taken');
      }
      throw new InternalServerErrorException();
    }
  }

  async getApps(): Promise<App[]> {
    return await this.appModel.find();
  }

  // Toggle activation/deactivation of app
  async toggleApp(id: string): Promise<void> {
    console.log(id)
    const app = await this.appModel.findById(id);
    if (!app) {
      throw new NotFoundException('App not found');
    }

    app.active = !app.active;
    await app.save();
  }

  async updateApp(id: string, updateApp: UpdateAppDto): Promise<App> {
    const app = await this.appModel.findById(id);
    if (!app) {
      throw new NotFoundException('App not found');
    }
    return await this.appModel.findByIdAndUpdate(id, updateApp, { new: true });
  }
}
