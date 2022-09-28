import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IListItem } from '../interfaces/IListItem';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get<IListItem[]>(environment.apiUrl + 'projects')
  }
}
