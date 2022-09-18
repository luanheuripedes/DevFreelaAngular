import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-df-button',
  templateUrl: './df-button.component.html',
  styleUrls: ['./df-button.component.scss']
})
export class DfButtonComponent implements OnInit {

  @Input() text: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
