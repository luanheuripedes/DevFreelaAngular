import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Route, Router } from '@angular/router';
import { IProject } from 'src/app/shared/interfaces/IProject';

import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService, private router:Router) {}

  list: IProject[] = [];
  tableIsLoaded: boolean = false;

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    //Pegar para a API
    this.listService.getProjects().subscribe((response) => {
      this.list = response;
      this.buildTable();
      this.tableIsLoaded = true;
    },
      //posso fazer isso tudo pelo interceptor
    (error) => {
        if(error.status == 400){
          alert("Bad Request 400")
        }

        if(error.status == 500){
          alert("Erro no servidor 500")
        }

        if(error.status == 403){
          alert("Acesso negado")
          //redirect para o login
        }
    });
  }


  buildTable() {
    const idClient = localStorage.getItem('idClient');

    this.list = this.list.filter(
      (listItem: IProject) => listItem.idClient == idClient
    );
   
  }


  deleteProject(id: any) {

    this.listService.deleteProject(id).subscribe(
      (response) => {
        this.list = this.list.filter((project) => project.id !== id);
        this.buildTable();
      }

    )
  }

  redirectTo(url:string){
    this.router.navigateByUrl(url);
  }

  redirectToWithParams(url:string, id:any){
    const dataParams: NavigationBehaviorOptions = {
      state:{
        id: id
      }
    }

    this.router.navigate([`/${url}`], dataParams)
  }
}
