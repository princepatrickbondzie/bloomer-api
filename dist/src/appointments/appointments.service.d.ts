import { Model } from 'mongoose';
import { Appointment } from '../shared/schema/appointment';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { User } from '../shared/schema/user';
export declare class AppointmentsService {
    private readonly appointmentModel;
    constructor(appointmentModel: Model<Appointment>);
    createAppointment(user: User, businessId: string, createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    getAllAppointments(): Promise<Appointment[]>;
    getAppointmentByUser(user: User): Promise<Appointment[]>;
    getAppointmentByBusiness(businessId: string): Promise<Appointment[]>;
    getOneAppointment(id: string): Promise<Appointment>;
    updateAppointmentByUser(id: string, user: User, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment>;
    updateAppointmentByAdmin(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment>;
}
