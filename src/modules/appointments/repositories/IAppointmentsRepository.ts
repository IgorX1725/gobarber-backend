import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointment from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentRepository {
  create(data: ICreateAppointment): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
