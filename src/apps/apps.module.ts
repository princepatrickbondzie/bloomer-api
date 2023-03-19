import { Module } from '@nestjs/common';
import { AppsService } from './apps.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppsController } from './apps.controller';
import { App, AppSchema } from '../shared/schema/app';
import { User, UserSchema } from '../shared/schema/user';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: App.name, schema: AppSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AppsController],
  providers: [AppsService, JwtService],
})
export class AppsModule {}
