import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyOTPDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly otp: string;
}
