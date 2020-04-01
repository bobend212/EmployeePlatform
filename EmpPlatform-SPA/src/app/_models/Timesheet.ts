import { User } from './User';

export interface Timesheet {
  id: number;
  user: User;
  projectId: number;
  projectName: string;
  projectNumber: string;
  siteName: string;
  workTypeId: number;
  workTypeName: string;
  datePicked: Date;
  dateAdded: Date;
  time: number;
  weekNo: number;
}
