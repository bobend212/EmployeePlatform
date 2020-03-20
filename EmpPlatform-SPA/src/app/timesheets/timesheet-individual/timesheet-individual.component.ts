import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/_models/Timesheet';
import { AlertifyService } from 'src/app/_services/Alertify.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-timesheet-individual',
  templateUrl: './timesheet-individual.component.html',
  styleUrls: ['./timesheet-individual.component.css']
})
export class TimesheetIndividualComponent implements OnInit {
  timesheets: Timesheet[];
  user: User[];

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private userService: UserService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.timesheets = Array.of(data["timesheet"]);
    });
  }

  loadTimesheets() {
    this.userService.getUsers().subscribe(
      (user: User[]) => {
        this.user = user;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

}
