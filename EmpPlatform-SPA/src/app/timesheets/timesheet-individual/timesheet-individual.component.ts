import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/_models/Timesheet';
import { TimesheetService } from 'src/app/_services/timesheet.service';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { Project } from 'src/app/_models/Project';
import { WorkType } from 'src/app/_models/WorkType';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-timesheet-individual',
  templateUrl: './timesheet-individual.component.html',
  styleUrls: ['./timesheet-individual.component.css']
})
export class TimesheetIndividualComponent implements OnInit {
  timesheets: Timesheet[];
  timesheetsForms: FormArray = this.fb.array([]);
  projectList: Project[];
  workTypesList: WorkType[];
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private route: ActivatedRoute,
    private timesheetService: TimesheetService,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    //load timesheet for individual WORKS
    // this.route.data.subscribe(data => {
    //   this.timesheets = data["timesheet"];
    // });

    this.timesheetService.getTimesheet(this.authService.decodedToken.nameid).subscribe(
      res => {
        if (res == [])
          this.addTimesheetForm();
        else {
          //generate formarray as per the data received from BankAccont table
          (res as []).forEach((timesheet: Timesheet) => {
            this.timesheetsForms.push(this.fb.group({
              timesheetId: [timesheet.id],
              projectId: [timesheet.projectId],
              workTypeId: [timesheet.workTypeId],
              date: [timesheet.datePicked],
              time: [timesheet.time]
            }));
          });
        }
      }
    );

    this.bsConfig = {
      isAnimated: true,
      containerClass: 'theme-dark-blue'
    };

    this.loadProjects();
    this.loadWorkTypes();

    this.timesheetService.getWorkTypesList()
      .subscribe(result => this.workTypesList = result as []);

    this.addTimesheetForm();
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

  addTimesheetForm() {
    this.timesheetsForms.push(this.fb.group({
      timesheetId: [0],
      projectId: [0],
      workTypeId: [0],
      date: [''],
      time: [0]
    }));
  }

  recordSubmit(fg: FormGroup) {
    this.timesheetService.postTimesheetRecord(fg.value)
      .subscribe((res: any) => {
        fg.patchValue({ timesheetId: res.timesheetId });
      })
  }

  // onEditInit(event): void {
  //   console.log(this.timesheets);
  //   console.log('Edit Init Event Called');
  // }

  // onEditCancel(): void {
  //   console.log(this.timesheets);
  //   console.log('Edit Cancel Event Called');
  //}
}
