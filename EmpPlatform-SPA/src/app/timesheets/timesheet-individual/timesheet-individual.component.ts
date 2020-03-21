import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { Timesheet } from 'src/app/_models/Timesheet';
import { AlertifyService } from 'src/app/_services/Alertify.service';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-timesheet-individual',
  templateUrl: './timesheet-individual.component.html',
  styleUrls: ['./timesheet-individual.component.css']
})
export class TimesheetIndividualComponent implements OnInit {
  timesheets: Timesheet[];

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.timesheets = data["timesheet"];
    });
  }

  // updateUser() {
  //   this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
  //     this.alertify.success('Profile updated successfully');
  //     this.editForm.reset(this.user);
  //   }, error => {
  //     this.alertify.error(error);
  //   });

  // }
}
