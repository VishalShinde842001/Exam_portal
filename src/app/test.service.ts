import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Employee
{
  eid:number;
  name:string;
  salary:number;

  public constructor(eid:number,name:string,salary:number)
  {
    this.eid=eid;
    this.name=name;
    this.salary=salary;

  }
}
@Injectable({providedIn: 'root'})
export class TestService 
{

  constructor(private httpClient:HttpClient) { }

  // ArrayList<Employee> arraylist=new ArrayList<Employee>();

  getEmployee(eid:number)
  {
    return this.httpClient.get<Employee>("http://localhost:7070/getEmployee/"+eid)
  }

  getAllEmployees()
  {
    return this.httpClient.get<Employee[]>("http://localhost:7070/getAllEmployees/")
  }

  saveEmployee(employee:Employee):Observable<boolean>
  {
    return this.httpClient.post<boolean>("http://localhost:7070/saveEmployee/",employee);
  }

  updateEmployee(employee:Employee)
  {
    return this.httpClient.put<boolean>("http://localhost:7070/updateEmployee/",employee);
  }
  
  deleteEmployee(eid:number)
  {
    return this.httpClient.get<boolean>("http://localhost:7070/deleteEmployee/"+eid);
  }

}
