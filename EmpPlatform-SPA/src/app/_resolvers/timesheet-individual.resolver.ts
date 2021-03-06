import { Injectable } from "@angular/core";
import { User } from "../_models/user";
import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { AlertifyService } from "../_services/alertify.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../_services/auth.service";
import { Timesheet } from '../_models/Timesheet';
import { TimesheetService } from '../_services/timesheet.service';

@Injectable()
export class TimesheetIndividualResolver implements Resolve<Timesheet> {
  constructor(
    private timesheetService: TimesheetService,
    private router: Router,
    private alertify: AlertifyService,
    private authService: AuthService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Timesheet> {
    return this.timesheetService.getTimesheet(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertify.error("Problem retrieving your data");
        this.router.navigate(["/users"]);
        return of(null);
      })
    );
  }
}
