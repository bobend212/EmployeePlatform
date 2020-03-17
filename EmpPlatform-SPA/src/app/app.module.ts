import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { WorkflowComponent } from "./workflow/workflow.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { appRoutes } from "./routes";
import { UsersComponent } from "./users/users.component";
import { TimesheetDetailComponent } from "./timesheet-detail/timesheet-detail.component";
import { EditUserProfileComponent } from "./edit-user-profile/edit-user-profile.component";
import { UserEditResolver } from "./_resolvers/user-edit.resolver";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ProjectsListComponent,
    WorkflowComponent,
    TimesheetComponent,
    UsersComponent,
    TimesheetDetailComponent,
    EditUserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    UserEditResolver,
    PreventUnsavedChanges
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
