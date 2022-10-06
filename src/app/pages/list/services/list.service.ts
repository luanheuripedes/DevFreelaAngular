import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from 'src/app/shared/interfaces/IProject';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

//Apenas exemplo
const headers = new HttpHeaders({
  'Authorization': `Bearer  ${localStorage.getItem('token')}`
});

export class ListService {

  constructor(private http: HttpClient) { }

  //Apenas exemplo
  getProjectsEx(){
    return this.http.get<IProject[]>(`${environment.apiUrl}/projects`,{
      headers:headers
    });
  }

  getProjects(){
    return this.http.get<IProject[]>(`${environment.apiUrl}/projects`);
  }

  deleteProject(id:string){
    return this.http.delete(`${environment.apiUrl}/projects/${id}`)
  }
}
