import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ToggleUserActivationDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
}
