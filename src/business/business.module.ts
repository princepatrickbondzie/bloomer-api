import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessService } from './business.service';
import { App, AppSchema } from '../shared/schema/app';
import { User, UserSchema } from '../shared/schema/user';
import { Address, AddressSchema } from '../shared/schema/address';
import { BusinessController } from './business.controller';
import { Business, BusinessSchema } from '../shared/schema/business';
import { Category, CategorySchema } from '../shared/schema/category';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: App.name, schema: AppSchema },
      { name: User.name, schema: UserSchema },
      { name: Address.name, schema: AddressSchema },
      { name: Business.name, schema: BusinessSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [BusinessController],
  providers: [BusinessService, JwtService],
})
export class BusinessModule {}
