import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsArray,
  IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Category } from '../../shared/schema/category';

export class CreateBusinessDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  supportEmail: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  contact: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  region: string;

  @IsArray()
  @IsOptional()
  // @ApiPropertyOptional({
  //   isArray: true,
  //   type: Category,
  // })
  @ApiPropertyOptional()
  categories?: string[];
}
