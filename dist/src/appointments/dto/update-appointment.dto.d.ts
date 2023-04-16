import { ScheduleData } from '../../shared/schema/appointment';
export declare class UpdateAppointmentDto {
    readonly clientComment?: string;
    readonly businessComment?: string;
    readonly status?: string;
    readonly schedule?: ScheduleData;
}
