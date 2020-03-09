import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'timesheet', component: TimesheetComponent },
            { path: 'workflow', component: WorkflowComponent },
            { path: 'projects', component: ProjectsListComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
