import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/_services/timesheet.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Timesheet } from 'src/app/_models/Timesheet';
import { ActivatedRoute } from '@angular/router';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

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

  constructor(private timesheetService: TimesheetService, private authService: AuthService, private route: ActivatedRoute, private localeService: BsLocaleService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.timesheets = data["timesheet"];
    });

    //this.weekNo = this.startDate.getDate() - this.startDate.getDay();

    //this.startDate.setDate(this.bsValue.getDate());
    //this.endDate.setDate(this.startDate.getDate() + 7);
  }

  getMonday(date: Date, dayOfWeek: number) {
    let diff = (7 + (date.getDay() - dayOfWeek)) % 7;
  }




}
