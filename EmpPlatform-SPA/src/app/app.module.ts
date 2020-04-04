import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { RouterModule } from "@angular/router";
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { WorkflowComponent } from "./workflow/workflow.component";
import { appRoutes } from "./routes";
import { UsersComponent } from "./users/users.component";
import { EditUserProfileComponent } from "./edit-user-profile/edit-user-profile.component";
import { UserEditResolver } from "./_resolvers/user-edit.resolver";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { JwtModule } from '@auth0/angular-jwt';
import { UsersDetailedComponent } from './users-detailed/users-detailed.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { TimesheetIndividualComponent } from './timesheets/timesheet-individual/timesheet-individual.component';
import { TimesheetIndividualResolver } from './_resolvers/timesheet-individual.resolver';
import { MytimesheetComponent } from './timesheets/mytimesheet/mytimesheet.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ProjectsListComponent,
    WorkflowComponent,
    UsersComponent,
    EditUserProfileComponent,
    UsersDetailedComponent,
    TimesheetIndividualComponent,
    MytimesheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),
    MatCardModule,
    MatInputModule,
    MatTableModule,
    TableModule
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    UserEditResolver,
    PreventUnsavedChanges,
    UserDetailResolver,
    TimesheetIndividualResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
