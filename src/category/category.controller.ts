import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Type } from '../shared/utility/methods';
import { userType } from '../shared/utility/types';
import { AppGuard } from '../guards/app.guard';
import { TypeGuard } from '../guards/type.guard';
import { UserAuthGuard } from '../guards/auth-user.guard';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('Category')
@ApiBearerAuth()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @Type([userType.SuperAdmin, userType.Admin, userType.CustomerService])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'create a new category' })
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.createCategory(createCategoryDto);
  }

  @Get()
  @UseGuards(AppGuard)
  @ApiOperation({ summary: 'get all categories' })
  async getAllCategories() {
    return await this.categoryService.getAllCategories();
  }

  @Get(':id')
  @UseGuards(AppGuard)
  @ApiOperation({ summary: 'get one category' })
  async getSingleCategory(@Param('id') id: string) {
    return this.categoryService.getSingleCategory(id);
  }

  @Patch(':id')
  @Type([userType.SuperAdmin, userType.Admin, userType.CustomerService])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'update category' })
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.updateCategory(id, updateCategoryDto);
  }

  @Delete(':id')
  @Type([userType.SuperAdmin, userType.Admin, userType.CustomerService])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'delete category' })
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
