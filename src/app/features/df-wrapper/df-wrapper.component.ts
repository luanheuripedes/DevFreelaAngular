import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-df-wrapper',
  templateUrl: './df-wrapper.component.html',
  styleUrls: ['./df-wrapper.component.scss']
})
export class DfWrapperComponent {
  @Input() type: 'one-col'|'two-col' = 'two-col';
}
