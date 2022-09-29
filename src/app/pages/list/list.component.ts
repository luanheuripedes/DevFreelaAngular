import { Component, OnInit } from '@angular/core';
import { IListItem } from './interfaces/IListItem';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private listService: ListService) {}

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

  goToEdit(id:any) {
    window.location.href = `project-create-edit.html?id=${id}`;
  }

  deleteProject(id: any) {

    this.listService.deleteProject(id).subscribe(
      (response) => {
        this.list = this.list.filter((project) => project.id !== id);
        this.buildTable();
      }

    )
  }
}
