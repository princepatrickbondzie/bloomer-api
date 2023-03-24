import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Type } from '../shared/utility/methods';
import { User } from '../shared/schema/user';
import { userType } from '../shared/utility/types';
import { TypeGuard } from '../guards/type.guard';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserAuthGuard } from '../guards/auth-user.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Type([userType.SuperAdmin, userType.Admin, userType.CustomerService])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'get all user accounts (as type)' })
  async getAllUserAccounts(): Promise<User[]> {
    return await this.userService.getOnlyUsers();
  }

  @Get('accounts')
  @Type([userType.SuperAdmin, userType.Admin])
  @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'get all accounts' })
  async getAllAccounts(): Promise<User[]> {
    return await this.userService.getEveryUserType();
  }

  @Get(':id')
  @UseGuards(UserAuthGuard)
  @ApiOperation({ summary: 'get single user account' })
  async getSingleUser(@Param('id') id: string): Promise<User> {
    return await this.userService.getSingleUser(id);
  }

  @Patch(':id')
  @UseGuards(UserAuthGuard)
  @ApiOperation({ summary: 'update a single user account' })
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  // @Type([userType.SuperAdmin, userType.Admin])
  // @UseGuards(UserAuthGuard, TypeGuard)
  @ApiOperation({ summary: 'delete a single user account' })
  async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
