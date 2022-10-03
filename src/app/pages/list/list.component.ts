import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Route, Router } from '@angular/router';
import { IListItem } from './interfaces/IListItem';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService, private router:Router) {}

  list: IListItem[] = [];
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
    });
  }


  buildTable() {
    const idClient = localStorage.getItem('idClient');

    this.list = this.list.filter(
      (listItem: IListItem) => listItem.idClient == idClient
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
