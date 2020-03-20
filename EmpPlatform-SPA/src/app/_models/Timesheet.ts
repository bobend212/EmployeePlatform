import { User } from './User';

export interface Timesheet {
  id: number;
  user: User;
  projectName: string;
  projectNumber: string;
  siteName: string;
  workType: string;
  datePicked: Date;
  dateAdded: Date;
  time: number;
  weekNo: number;
}
