import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/_models/Timesheet';
import { TimesheetService } from 'src/app/_services/timesheet.service';

@Component({
  selector: 'app-timesheet-individual',
  templateUrl: './timesheet-individual.component.html',
  styleUrls: ['./timesheet-individual.component.css']
})
export class TimesheetIndividualComponent implements OnInit {
  timesheets: Timesheet[];

  constructor(
    private route: ActivatedRoute,
    private timesheetService: TimesheetService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.timesheets = data["timesheet"];
    });
    //this.timesheetService.getTimesheet();
  }

  onEditInit(event): void {
    console.log(this.timesheets);
    console.log('Edit Init Event Called');
  }

  onEditCancel(): void {
    console.log(this.timesheets);
    console.log('Edit Cancel Event Called');
  }
}
