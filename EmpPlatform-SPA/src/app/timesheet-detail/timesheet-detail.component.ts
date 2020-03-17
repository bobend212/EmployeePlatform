import { Component, OnInit } from "@angular/core";
import { User } from "../_models/User";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/Alertify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-timesheet-detail",
  templateUrl: "./timesheet-detail.component.html",
  styleUrls: ["./timesheet-detail.component.css"]
})
export class TimesheetDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params["id"]).subscribe(
      (user: User) => {
        this.user = user;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }
}
