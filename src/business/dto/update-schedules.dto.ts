import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString } from 'class-validator';

export class UpdateSchedules {
  @IsDateString()
  @ApiProperty()
  readonly date: Date;

  @IsArray()
  @ApiProperty()
  readonly hours: string[];
}
