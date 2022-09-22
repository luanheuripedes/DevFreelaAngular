import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { DfHeaderModule } from 'src/app/features/df-header/df-header.module';
import { DfButtonModule } from 'src/app/shared/components/df-button/df-button.module';
import { DfWrapperModule } from 'src/app/features/df-wrapper/df-wrapper.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    DfButtonModule,
    DfWrapperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
