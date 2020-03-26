import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Department } from '../_models/Department';
import { DepartmentService } from '../_services/department.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { User } from '../_models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  departments: Department[];
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService, private alertify: AlertifyService, private fb: FormBuilder, private deptService: DepartmentService) { }

  ngOnInit() {
    this.bsConfig = {
      isAnimated: true,
      containerClass: 'theme-dark-blue'
    };
    this.createRegisterForm();
    this.loadDepartments();
  }

  loadDepartments() {
    this.deptService.getDepartments().subscribe(
      (departments: Department[]) => {
        this.departments = departments;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['male'],
      hireDate: [null, Validators.required],
      departmentId: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
  }

  // register() {
  //   if (this.registerForm.valid) {
  //     this.user = Object.assign({}, this.registerForm.value);
  //     this.authService.register(this.user).subscribe(() => {
  //       this.alertify.success('Registration successfull');
  //     }, error => {
  //       this.alertify.error(error);
  //     });
  //   }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(
        () => {
          this.alertify.success('Registration succesful');
        },
        error => {
          console.log(this.user);
        });


    }
  }


  // this.authService.register(this.model).subscribe(() => {
  //   this.alertify.success('register success');
  // }, error => {
  //   this.alertify.error(error);
  // });
  //console.log(this.registerForm.value);


  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('cancelled');
  }

}
