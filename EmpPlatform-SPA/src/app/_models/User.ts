import { Timesheet } from "./Timesheet";

export interface User {
  id: number;
  username: string;
  gender: string;
  hireDate: Date;
  createdDate: Date;
  lastActive: Date;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  timesheets?: Timesheet[];
  departmentName: string;
  departmentId: number;

}
