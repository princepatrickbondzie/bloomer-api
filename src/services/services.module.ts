import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { User, UserSchema } from '../shared/schema/user';
import { Business, BusinessSchema } from '../shared/schema/business';
import { Service, ServiceSchema } from '../shared/schema/service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Service.name, schema: ServiceSchema },
      { name: Business.name, schema: BusinessSchema },
    ]),
  ],
  controllers: [ServicesController],
  providers: [ServicesService, JwtService],
})
export class ServicesModule {}
