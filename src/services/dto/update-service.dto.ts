import { PartialType } from '@nestjs/swagger';
import { CreateServiceDto } from './create-service.dto';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly name: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  readonly price: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  readonly duration: number;

  // @IsString()
  // @ApiProperty()
  // readonly businessId: string;
}
