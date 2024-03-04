import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;


  currentUser:User = new User();

  setCurrentUser(user:User){
    this.currentUser=user;
  }

  getCurrentUser(){
    return this.currentUser;
  }

  constructor(private httpClient:HttpClient) { }

  public loginUser(user:User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/login", user)
  }
  public checkotp(user: User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/verify-otp",user)
    
  }
  public registerUser(user:User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/registeradmin",user)

  }
  public getAllEmployeeData():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/admin")
  } 

  public getEmployee(id:number):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/employee/"+id)
  }

  public deleteEntrries(id:number):Observable<any>{
    return this.httpClient.delete<any>("http://localhost:8080/deleteuser/"+id)
  }

  public getEmployeeById(id:number):Observable<any>{
    console.log(id)
    return this.httpClient.get<any>("http://localhost:8080/usernyid/"+id)
  }

  public updateEmployee(id:number, user:User):Observable<any>{
    return this.httpClient.put("http://localhost:8080/updatedata"+id, user)
  }

}
