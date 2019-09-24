import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {



  status:String="approved";

  _urlgetall = 'http://localhost:8080/users'

  _urlDeleteRow = ' http://localhost:8080/users/delete'
  
  _urlView = 'http://localhost:8080/users/show'

  _urlAccept = 'http://localhost:8080/users/updateStatus'

  getClaimUser = 'http://localhost:8080/users/claimUsers'

  _approveClaim = 'http://localhost:8080/users/approveClaim'

  constructor(private http: HttpClient) { }

 


  get_Users() {
    return this.http.get(this._urlgetall);
  }

  getClaimedUsers(){
    return this.http.get(this.getClaimUser);
  }


  delete_row(_id : string){
    return this.http.delete(this._urlDeleteRow + `/${_id}`);
  }

  view_User(_id : string){

    return this.http.get(this._urlView + `/${_id}`);
    
    }

    accept_user(_id : string , status:any){
      console.log(status);
      // debugger;
      return this.http.put(this._urlAccept +'/'+ _id , status);
    }

    approveClaim(_id: string, claim){
      return this.http.post(this._approveClaim + `/${_id}`,claim);
    }
}
