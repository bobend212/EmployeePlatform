import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-users-detailed',
  templateUrl: './users-detailed.component.html',
  styleUrls: ['./users-detailed.component.css']
})
export class UsersDetailedComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  // deleteUser() {
  //   this.userService.deleteUser(this.user.id).subscribe(next => {
  //     this.alertify.success('Profile deleted successfully');
  //     //this.editForm.reset(this.user);
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

  // loadUser() {
  //   this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
  //     this.user = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   })
  // }

}
