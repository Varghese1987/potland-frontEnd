import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(userDetail):Observable<any>{
    return this.http.post(`${environment.apiUrl}/addUser`,userDetail);
  }

  userLogin(loginDetails):Observable<any>{
    return this.http.post(`${environment.apiUrl}/login`,loginDetails)
  }

}
