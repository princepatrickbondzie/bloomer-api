import {
  IsNotEmpty,
  IsString,
  IsIn,
  IsEmail,
  IsDateString,
} from 'class-validator';
import { userType } from '../../shared/utility/types';
import { ApiProperty } from '@nestjs/swagger';

export class AuthByAdminDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastname: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  contact: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  dob: Date;

  @IsString()
  @IsIn([
    userType.Admin,
    userType.Client,
    userType.SuperAdmin,
    userType.CustomerService,
  ])
  @ApiProperty({
    enum: [
      userType.Admin,
      userType.Client,
      userType.SuperAdmin,
      userType.CustomerService,
    ],
  })
  type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
