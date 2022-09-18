import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { DfHeaderModule } from 'src/app/features/df-header/df-header.module';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    DfHeaderModule
  ]
})
export class RegisterModule { }
