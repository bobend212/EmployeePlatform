import { Component, OnInit, ViewChild } from "@angular/core";
import { User } from "../_models/User";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AlertifyService } from "../_services/Alertify.service";

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
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
  }

  updateUser() {
    this.alertify.success("Profile updated successfully");
    this.editForm.reset();
  }
}
