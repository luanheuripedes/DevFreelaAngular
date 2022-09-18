import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-df-header',
  templateUrl: './df-header.component.html',
  styleUrls: ['./df-header.component.scss']
})
export class DfHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.buildHeader();
  }


  buildHeader() {
    if(this.checkIfUserIsLogged()){
      //insere nome de usuario no header e role tambem
    }else{
      //faz nada
    }
  }


  checkIfUserIsLogged() {
    return localStorage.getItem("userName") && localStorage.getItem("role");
  }

}
