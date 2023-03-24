import { PartialType } from '@nestjs/swagger';
import { CreateBusinessDto } from './create-business.dto';
import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBusinessDto extends PartialType(CreateBusinessDto) {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly name: string;

  @IsEmail()
  @IsOptional()
  @ApiPropertyOptional()
  readonly supportEmail: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly contact: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly city: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly region: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional()
  readonly categories?: string[];
}
