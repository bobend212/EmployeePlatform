export interface Timesheet {
  id: number;
  projectNumber: string;
  projectName: string;
  workType: string;
  time: number;
  datePicked: Date;
  dateAdded: Date;
  weekNo: number;
}
