import { PartialType } from '@nestjs/swagger';
import { ScheduleData } from '../../shared/schema/appointment';
import { appointmentStatus } from '../../shared/utility/types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateAppointmentDto } from './create-appointment.dto';
import { IsIn, IsString, IsOptional } from 'class-validator';

export class UpdateAppointmentDto {
  @IsOptional()
  @ApiPropertyOptional()
  readonly clientComment?: string;

  @IsOptional()
  @ApiPropertyOptional()
  readonly businessComment?: string;

  @IsIn([
    appointmentStatus.NotDue,
    appointmentStatus.Pending,
    appointmentStatus.Confirmed,
    appointmentStatus.Cancelled,
    appointmentStatus.Completed,
    appointmentStatus.AwaitingPayment,
  ])
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    enum: [
      appointmentStatus.NotDue,
      appointmentStatus.Pending,
      appointmentStatus.Confirmed,
      appointmentStatus.Cancelled,
      appointmentStatus.Completed,
      appointmentStatus.AwaitingPayment,
    ],
  })
  readonly status?: string;

  @IsOptional()
  @ApiPropertyOptional({ type: ScheduleData })
  readonly schedule?: ScheduleData;
}
