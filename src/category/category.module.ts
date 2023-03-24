import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserSchema } from '../shared/schema/user';
import { App, AppSchema } from '../shared/schema/app';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category, CategorySchema } from '../shared/schema/category';
import { Business, BusinessSchema } from '../shared/schema/business';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: App.name, schema: AppSchema },
      { name: User.name, schema: UserSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Business.name, schema: BusinessSchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, JwtService],
})
export class CategoryModule {}
