import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../_models/User";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AlertifyService } from "../_services/Alertify.service";
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: "app-edit-user-profile",
  templateUrl: "./edit-user-profile.component.html",
  styleUrls: ["./edit-user-profile.component.css"]
})
export class EditUserProfileComponent implements OnInit {
  @ViewChild("editForm", { static: true }) editForm: NgForm;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.success('Profile updated successfully');
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });

  }
}
