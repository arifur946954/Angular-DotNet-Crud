import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl:string=environment.baseApiUrl;


  constructor(private http:HttpClient) { }
  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employee');

  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl + '/api/employee',addEmployeeRequest);
  }

  getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee> (this.baseApiUrl + '/api/employee/'+id);
  }

  updateEmployee(id:number,updateEmployeeRequest:Employee):Observable<Employee>{
return this.http.put<Employee>(this.baseApiUrl + '/api/employee/'+id,updateEmployeeRequest)
  }
}
