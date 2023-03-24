import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Appointment } from '../shared/schema/appointment';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { User } from '../shared/schema/user';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectModel(Appointment.name)
    private readonly appointmentModel: Model<Appointment>,
  ) {}

  async createAppointment(
    user: User,
    businessId: string,
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    const {
      amountToPay,
      schedule,
      serviceCost,
      services,
      totalDuration,
      type,
      clientComment,
      discount,
      visitCharge,
    } = createAppointmentDto;
    return await this.appointmentModel.create({
      amountToPay,
      schedule,
      serviceCost,
      services,
      totalDuration,
      type,
      clientComment,
      discount,
      visitCharge,
      user: new Types.ObjectId(user._id),
      business: new Types.ObjectId(businessId),
    });
  }

  async getAllAppointments(): Promise<Appointment[]> {
    return await this.appointmentModel.find();
  }

  async getAppointmentByUser(user: User): Promise<Appointment[]> {
    return await this.appointmentModel.find({
      user: new Types.ObjectId(user._id),
    });
  }
  async getAppointmentByBusiness(businessId: string): Promise<Appointment[]> {
    return await this.appointmentModel.find({
      business: new Types.ObjectId(businessId),
    });
  }

  async getOneAppointment(id: string): Promise<Appointment> {
    return await this.appointmentModel.findById(id);
  }

  async updateAppointmentByUser(
    id: string,
    user: User,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    const { clientComment, schedule } = updateAppointmentDto;
    return await this.appointmentModel.findOneAndUpdate(
      {
        id,
        user: new Types.ObjectId(user._id),
      },
      { clientComment: clientComment, schedule: schedule },
      {
        new: true,
      },
    );
  }

  async updateAppointmentByAdmin(
    id: string,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    const { status, schedule } = updateAppointmentDto;
    return await this.appointmentModel.findByIdAndUpdate(
      id,
      { status: status, schedule: schedule },
      {
        new: true,
      },
    );
  }

  // remove(id: number) {
  //   return `This action removes a #${id} appointment`;
  // }
}
