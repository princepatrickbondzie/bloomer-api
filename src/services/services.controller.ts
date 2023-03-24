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
import { userType } from '../shared/utility/types';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserAuthGuard } from 'src/guards/auth-user.guard';
import { TypeGuard } from 'src/guards/type.guard';
import { Type } from 'src/shared/utility/methods';

@Controller('services')
@ApiTags('Services')
@ApiBearerAuth()
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post(':businessId')
  // @Type([userType.Business, userType.CustomerService])
  @UseGuards(UserAuthGuard)
  async createServiceByBusiness(
    @Body() createServiceDto: CreateServiceDto,
    @Param('businessId') businessId: string,
  ) {
    return this.servicesService.createServiceByBusiness(
      businessId,
      createServiceDto,
    );
  }

  @Get(':businessId')
  // @Type([userType.Business, userType.CustomerService])
  @UseGuards(UserAuthGuard)
  async getAllServicesByBusiness(@Param('businessId') businessId: string) {
    return await this.servicesService.getAllServicesByBusiness(businessId);
  }

  @Get(':id/:businessId')
  // @Type([userType.Business, userType.CustomerService])
  @UseGuards(UserAuthGuard)
  async getSingleServiceByBusiness(
    @Param('id') id: string,
    @Param('businessId') businessId: string,
  ) {
    return await this.servicesService.getSingleServiceByBusiness(
      id,
      businessId,
    );
  }

  @Patch(':id/:businessId')
  // @Type([userType.Business, userType.CustomerService])
  @UseGuards(UserAuthGuard)
  async updateServiceByBusiness(
    @Param('id') id: string,
    @Param('businessId') businessId: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return await this.servicesService.updateServiceByBusiness(
      id,
      businessId,
      updateServiceDto,
    );
  }

  @Delete(':id/:businessId')
  // @Type([userType.Business, userType.CustomerService])
  @UseGuards(UserAuthGuard)
  async deleteServiceByBusiness(
    @Param('id') id: string,
    @Param('businessId') businessId: string,
  ) {
    return await this.servicesService.deleteServiceByBusiness(id, businessId);
  }
}
