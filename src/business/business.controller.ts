import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Type } from '../shared/utility/methods';
import { User } from '../shared/schema/user';
import { Business } from '../shared/schema/business';
import { userType } from '../shared/utility/types';
import { AppGuard } from '../guards/app.guard';
import { TypeGuard } from '../guards/type.guard';
import { UserAuthGuard } from '../guards/auth-user.guard';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { UpdateSchedules } from './dto/update-schedules.dto';

@Controller('business')
@ApiTags('Business')
@ApiBearerAuth()
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  @Type([
    userType.Client,
    userType.SuperAdmin,
    userType.Admin,
    userType.CustomerService,
  ])
  @UseGuards(UserAuthGuard)
  @ApiOperation({ summary: 'create new Business' })
  async createBusiness(
    @Body() createBusinessDto: CreateBusinessDto,
    @Request() req,
  ) {
    const user: User = req.user;
    return await this.businessService.createBusiness(user, createBusinessDto);
  }

  @Get('user/:id')
  // @Type([userType.Business])
  @UseGuards(UserAuthGuard)
  @ApiOperation({ summary: 'get business by user' })
  async getBusinessByUser(
    @Request() req,
    @Param('id') id: string,
  ): Promise<Business> {
    const user: User = req.user;
    return await this.businessService.getBusinessByUser(id, user);
  }

  @Get(':id')
  @UseGuards(AppGuard)
  @ApiOperation({ summary: 'get single business' })
  async getOneBusiness(@Param('id') id: string): Promise<Business> {
    return await this.businessService.getOneBusiness(id);
  }

  @Get()
  @UseGuards(AppGuard)
  @ApiOperation({ summary: 'get all businesses' })
  async getAllBusinesses(): Promise<Business[]> {
    return await this.businessService.getAllBusinesses();
  }

  @Get(':category')
  @UseGuards(AppGuard)
  @ApiOperation({ summary: 'get business by category' })
  async getBusinessByCategory(
    @Param('category') category: string,
  ): Promise<Business[]> {
    return await this.businessService.getBusinessByCategory(category);
  }

  @Patch('user/:id')
  // @Type([userType.Business])
  @UseGuards(UserAuthGuard)
  @ApiOperation({ summary: 'update business' })
  async updateBusiness(
    @Param('id') id: string,
    @Body() updateBusinessDto: UpdateBusinessDto,
    @Request() req,
  ) {
    const user: User = req.user;
    return await this.businessService.updateBusiness(
      id,
      user,
      updateBusinessDto,
    );
  }

  //schedule must have an id
  @Patch('schedule/:id')
  // @Type([userType.Business])
  @UseGuards(UserAuthGuard)
  @ApiOperation({ summary: 'update business schedules' })
  async updateBusinessSchedules(
    @Param('id') id: string,
    @Request() req,
    @Body() updateSchedules: UpdateSchedules,
  ): Promise<Business> {
    const user: User = req.user;
    return await this.businessService.updateBusinessSchedules(
      id,
      user,
      updateSchedules,
    );
  }

  @Delete(':id')
  @Type([userType.SuperAdmin, userType.Admin, userType.CustomerService])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'delete business account' })
  async deleteBusiness(@Param('id') id: string) {
    return await this.businessService.deleteBusiness(id);
  }

  @Patch('toggle/:id')
  @Type([userType.SuperAdmin, userType.Admin, userType.CustomerService])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'toggle business activation' })
  async deactivateBusiness(@Param('id') id: string): Promise<Business> {
    return await this.businessService.deactivateBusiness(id);
  }
}
