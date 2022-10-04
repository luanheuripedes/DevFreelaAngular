import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreateEditComponent } from './project-create-edit.component';
import { ProjectCreateEditRoutingModule } from './project-create-edit-routing.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = {
  validation: false
};



@NgModule({
  declarations: [
    ProjectCreateEditComponent
  ],
  imports: [
    CommonModule,
    ProjectCreateEditRoutingModule,
    DfWrapperModule,
    DfButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
  ]
})
export class ProjectCreateEditModule { }
