import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAppDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  readonly name: string;

  @IsEmail()
  @IsOptional()
  @ApiPropertyOptional()
  readonly supportEmail: string;
}
