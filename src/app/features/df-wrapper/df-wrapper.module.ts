import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DfWrapperComponent } from './df-wrapper.component';
import { DfHeaderModule } from '../df-header/df-header.module';



@NgModule({
  declarations: [
    DfWrapperComponent
  ],
  imports: [
    CommonModule,
    DfHeaderModule
  ],
  exports:[
    DfWrapperComponent
  ]
})
export class DfWrapperModule { }
