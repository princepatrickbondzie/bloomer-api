import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  mobile: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  geoCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  landmark: string;
}
