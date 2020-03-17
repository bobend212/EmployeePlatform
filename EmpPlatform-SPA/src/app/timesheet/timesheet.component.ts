import { Component, OnInit } from "@angular/core";
import { Timesheet } from "../_models/Timesheet";
import { TimesheetService } from "../_services/timesheet.service";
import { AlertifyService } from "../_services/Alertify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-timesheet",
  templateUrl: "./timesheet.component.html",
  styleUrls: ["./timesheet.component.css"]
})
export class TimesheetComponent implements OnInit {
  timesheet: Timesheet;

  constructor(
    private timesheetService: TimesheetService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.loadTimesheet();
  }

  loadTimesheet() {
    this.timesheetService
      .getTimesheet(+this.route.snapshot.params["id"])
      .subscribe(
        (timesheet: Timesheet) => {
          this.timesheet = timesheet;
        },
        error => {
          this.alertify.error(error);
        }
      );
  }
}
