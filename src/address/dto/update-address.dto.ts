import { PartialType } from '@nestjs/swagger';
import { CreateAddressDto } from './create-address.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly fullname?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly mobile?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly geoCode?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly landmark?: string;
}
