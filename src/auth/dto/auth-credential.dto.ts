import { IsNotEmpty, IsEmail, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialDto {
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
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  //   @IsString()
  //   @IsNotEmpty()
  //   @IsIn([userType.CLIENT])
  //   type: string;

  //   @IsString()
  //   @IsOptional()
  //   secretToken?: string;
}
