import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsDateString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly firstname: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly lastname: string;

  @IsEmail()
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly email: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly contact: string;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly dob: Date;
}
