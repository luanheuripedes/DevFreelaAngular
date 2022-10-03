import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-df-wrapper',
  templateUrl: './df-wrapper.component.html',
  styleUrls: ['./df-wrapper.component.scss']
})
export class DfWrapperComponent {
  @Input() type: 'one-col'|'two-col' = 'two-col';
  @Input() back: string = '';

  constructor(private router:Router){

  }

  redirectTo(url:string){
    this.router.navigateByUrl(url);
  }
}
