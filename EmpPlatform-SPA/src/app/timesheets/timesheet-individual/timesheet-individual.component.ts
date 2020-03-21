import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/_models/Timesheet';

@Component({
  selector: 'app-timesheet-individual',
  templateUrl: './timesheet-individual.component.html',
  styleUrls: ['./timesheet-individual.component.css']
})
export class TimesheetIndividualComponent implements OnInit {
  timesheets: Timesheet[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.timesheets = data["timesheet"];
    });
  }
}
