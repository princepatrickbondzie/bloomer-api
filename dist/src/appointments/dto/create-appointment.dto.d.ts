import { Service } from '../../shared/schema/service';
import { ScheduleData } from '../../shared/schema/appointment';
export declare class CreateAppointmentDto {
    services: Service[];
    serviceCost: number;
    totalDuration: number;
    type: string;
    visitCharge?: number;
    discount?: number;
    amountToPay: number;
    schedule: ScheduleData;
    clientComment?: string;
}
