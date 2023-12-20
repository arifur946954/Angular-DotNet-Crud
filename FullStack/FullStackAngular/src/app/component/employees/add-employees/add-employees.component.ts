import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})


export class AddEmployeesComponent implements OnInit {
  addEmployeeRequest:Employee={
    id:0,
    mobileNumber:'',
    name:'',
    email:' ',
    password:' '
  }

  constructor(private employeeService:EmployeesService, private router:Router) { }

  ngOnInit(): void {
  }
  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next:(employee)=>{
        console.log(employee);
        this.router.navigate(['employees']);
      }
    })
  }

}
