import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/_services/timesheet.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Timesheet } from 'src/app/_models/Timesheet';
import { ActivatedRoute } from '@angular/router';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TimesheetModel } from 'src/app/_models/TimesheetModel';
import { WorkType } from 'src/app/_models/WorkType';
import { Project } from 'src/app/_models/Project';

@Component({
  selector: 'app-mytimesheet',
  templateUrl: './mytimesheet.component.html',
  styleUrls: ['./mytimesheet.component.css']
})
export class MytimesheetComponent implements OnInit {
  timesheets: Timesheet[];

  startDate: Date;
  bsValue: Date = new Date();
  tues = new Date();

  weekNo: number;

  bsConfig: Partial<BsDatepickerConfig>;

  dynamicArray: Array<TimesheetModel> = [];
  newDynamic: any = {};
  projectList: Project[];
  workTypesList: WorkType[];

  constructor(private timesheetService: TimesheetService, private authService: AuthService, private route: ActivatedRoute, private localeService: BsLocaleService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.timesheets = data["timesheet"];
    });

    //this.weekNo = this.startDate.getDate() - this.startDate.getDay();

    //this.startDate.setDate(this.bsValue.getDate());
    //this.endDate.setDate(this.startDate.getDate() + 7);
    this.newDynamic = { monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" };
    this.dynamicArray.push(this.newDynamic);

    this.loadProjects();
    this.loadWorkTypes();
  }

  getMonday(date: Date, dayOfWeek: number) {
    let diff = (7 + (date.getDay() - dayOfWeek)) % 7;
  }

  addRow(index) {
    this.newDynamic = { monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: "" };
    this.dynamicArray.push(this.newDynamic);
    return true;
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      return true;
    }
  }

  loadWorkTypes() {
    this.timesheetService.getWorkTypesList().subscribe(
      (workTypes: WorkType[]) => {
        this.workTypesList = workTypes;
        console.log(workTypes);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadProjects() {
    this.timesheetService.getProjectsList().subscribe(
      (projects: Project[]) => {
        this.projectList = projects;
        console.log(projects);
      },
      error => {
        console.log(error);
      }
    );
  }


}
