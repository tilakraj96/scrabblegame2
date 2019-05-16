import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import{IUser} from '../employee/user.interface'

import { Employee } from './employee.models';
//import { Observable } from 'rxjs';
import { Observable,throwError } from 'rxjs';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  validateCredentials(id: string, password: string,username:string): Observable<string>{
    var userObj: IUser;
    userObj = { email: id, password: password,username:username, dateofbirth: null, passcode: null, score: null,status:null };
    return this.http.post<string>("true", userObj);
    //return this.http.post<string>('http://localhost:3000/employees', userObj);
  }
  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  } 
  
  // private users:IUser[]=[];
  // get_users(){
  //   let usr= this.http.get(this.baseURL);
  //   return usr;
  // }
  private user:IUser[]=[];
  getUsers(): Observable<IUser[]> {
    let usr= this.http.get<IUser[]>(this.baseURL);
    return usr;
    
  }

  // onSubmit(username:string,password:string,passcode:number,score:number,dateofbirth:Date,email:string){
  //   var userObj:IUser;
  //   userObj={username:username,password:password,passcode:passcode,score:score,dateofbirth:dateofbirth,email:email};
  //   console.log(userObj);
  //   return this.http.post<string>(this.baseURL,userObj);
  // }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  
}



