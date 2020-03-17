import { Timesheet } from "./Timesheet";

export interface User {
  id: number;
  gender: string;
  hireDate: Date;
  createdDate: Date;
  lastActive: Date;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  timesheets?: Timesheet[];
}
