import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Timesheet } from "../_models/Timesheet";

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
};

@Injectable({
  providedIn: "root"
})
export class TimesheetService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // getTimesheet(id): Observable<Timesheet> {
  //   return this.http.get<Timesheet>(
  //     this.baseUrl + "timesheet/" + id,
  //     httpOptions
  //   );
  // }

  getTimesheet(id) {
    return this.http.get(this.baseUrl + 'timesheet/' + id);
  }

  getProjectsList() {
    return this.http.get(this.baseUrl + 'timesheet/projects');
  }

  getWorkTypesList() {
    return this.http.get(this.baseUrl + 'timesheet/worktypes');
  }

  postTimesheetRecord(formData) {
    return this.http.post(this.baseUrl + 'timesheet', formData);
  }

}
