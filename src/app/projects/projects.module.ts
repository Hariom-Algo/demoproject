import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectService } from './shared/project.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectListComponent, ProjectCardComponent, ProjectFormComponent],
  providers:[ProjectService]
})
export class ProjectsModule { }
