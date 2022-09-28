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

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    //Pegar para a API
    this.listService.getProjects().subscribe(
      (response: IListItem[]) => {
        this.list = response;
        this.buildTable();
      }
    )
  }

    buildTable(){
    (document.querySelector("#table-body")as any).innerHTML = "";
    const idClient = localStorage.getItem('idClient');

    this.list = this.list.filter((listItem: IListItem) => listItem.idClient === idClient);


    this.list.forEach(listItem => {
        let template = `
                    <div class="row">
                        <div class="title-description">
                            <h6 class="title">${listItem.title}</h6>
                            <p class="description">${listItem.description}</p>
                        </div>
                        <div class="price">R$${listItem.totalCoast}</div>
                            <div class="actions">
                                <span class="edit material-icons" onclick="goToEdit(${listItem.id})">edit</span>
                                <span class="delete material-icons"onclick="deleteProject(${listItem.id})"> delete</span>
                            </div>                        
                    </div>
                    `;
        (document.querySelector("#table-body")as any).insertAdjacentHTML("beforeend", template);
    });
}
}
