import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {
  _url = 'http://localhost:8080/users/save';

  _urlgetall = 'http://localhost:8080/users'
  _urlView = 'http://localhost:8080/users/show'

  getAgent = `http://localhost:8080/agent/viewAgent`

  constructor(private http: HttpClient) { }

 

  get_Users() {
    return this.http.get(this._urlgetall);
  }

  getAgentDetail(){
    return this.http.get<any>(this.getAgent);
  }
  view_User(_id : string){

    return this.http.get(this._urlView + `/${_id}`);
    
    }

}