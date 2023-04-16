import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from 'src/shared/schema/appointment';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    createAppointment(businessId: string, req: any, createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    getAllAppointments(): Promise<Appointment[]>;
    getAppointmentByUser(req: any): Promise<Appointment[]>;
    getAppointmentByBusiness(businessId: string): Promise<Appointment[]>;
    getOneAppointment(id: string): Promise<Appointment>;
    updateAppointmentByUser(req: any, id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment>;
    updateAppointmentByAdmin(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment>;
}
