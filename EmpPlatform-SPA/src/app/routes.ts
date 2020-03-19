import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { WorkflowComponent } from "./workflow/workflow.component";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { AuthGuard } from "./_guards/auth.guard";
import { UsersComponent } from "./users/users.component";
import { EditUserProfileComponent } from "./edit-user-profile/edit-user-profile.component";
import { UserEditResolver } from "./_resolvers/user-edit.resolver";
import { PreventUnsavedChanges } from "./_guards/prevent-unsaved-changes.guard";
import { UsersDetailedComponent } from './users-detailed/users-detailed.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "users", component: UsersComponent },
      { path: "users/:id", component: UsersDetailedComponent, resolve: { user: UserDetailResolver } },
      {
        path: "user/edit",
        component: EditUserProfileComponent,
        resolve: { user: UserEditResolver },
        canDeactivate: [PreventUnsavedChanges]
      },
      { path: "timesheet", component: TimesheetComponent },
      { path: "workflow", component: WorkflowComponent },
      { path: "projects", component: ProjectsListComponent }
    ]
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
