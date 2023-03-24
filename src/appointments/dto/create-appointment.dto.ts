import {
  IsIn,
  IsArray,
  IsString,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { Service } from '../../shared/schema/service';
import { ScheduleData } from '../../shared/schema/appointment';
import { appointmentTypes } from '../../shared/utility/types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAppointmentDto {
  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    isArray: true,
    type: Service,
  })
  services: Service[];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  serviceCost: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  totalDuration: number;

  @IsIn([appointmentTypes.InPerson, appointmentTypes.Visit])
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ enum: [appointmentTypes.InPerson, appointmentTypes.Visit] })
  type: string;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  visitCharge?: number;

  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional()
  discount?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  amountToPay: number;

  @ApiProperty({ type: ScheduleData })
  schedule: ScheduleData;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  clientComment?: string;
}
