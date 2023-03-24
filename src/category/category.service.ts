import { Model } from 'mongoose';
// import { Business } from '../shared/schema/business';
import { Category } from '../shared/schema/category';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>, // @InjectModel(Business.name) private readonly businessModel: Model<Business>,
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return await this.categoryModel.create(createCategoryDto);
  }

  async getAllCategories(): Promise<Category[]> {
    return await this.categoryModel.find();
  }

  async getSingleCategory(id: string): Promise<Category> {
    return await this.categoryModel.findById(id);
  }

  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {
      new: true,
    });
  }

  async deleteCategory(id: string): Promise<void> {
    return await this.categoryModel.findByIdAndDelete(id);
  }
}
