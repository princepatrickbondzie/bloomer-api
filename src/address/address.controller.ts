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
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { User } from '../shared/schema/user';
import { UserAuthGuard } from '../guards/auth-user.guard';
import { Address } from '../shared/schema/address';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('address')
@ApiTags('Address')
@ApiBearerAuth()
@UseGuards(UserAuthGuard)
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @ApiOperation({ summary: 'create new user address' })
  async createUserAddress(
    @Body() createAddressDto: CreateAddressDto,
    @Request() req,
  ): Promise<Address> {
    const user: User = req.user;
    return await this.addressService.createUserAddress(createAddressDto, user);
  }

  @Get()
  @ApiOperation({ summary: 'get all user addresses' })
  async getAllUserAddress(@Request() req): Promise<Address[]> {
    const user: User = req.user;
    return await this.addressService.getAllUserAddress(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'get one user address' })
  async getSingleUserAddress(@Param('id') id: string, @Request() req) {
    const user: User = req.user;
    return await this.addressService.getSingleUserAddress(id, user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update one user address' })
  async updateUserAddress(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
    @Request() req,
  ) {
    const user: User = req.user;
    return await this.addressService.updateUserAddress(
      id,
      user,
      updateAddressDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete one user address' })
  async deleteUserAddress(@Param('id') id: string, @Request() req) {
    const user: User = req.user;
    return await this.addressService.deleteUserAddress(id, user);
  }
}
