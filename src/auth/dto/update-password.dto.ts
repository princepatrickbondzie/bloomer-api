import { IsNotEmpty, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePassword {
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional()
  readonly newPassword: string;
}
