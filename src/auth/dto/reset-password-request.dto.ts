import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordRequest {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly mobile: string;
}
