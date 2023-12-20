import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails :Employee={
    id:0,
    mobileNumber:' ',
    name:' ',
    email:' ',
    password:' '


  };

  constructor(private route:ActivatedRoute,
     private employeeServices:EmployeesService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(param)=>{
        const id=param.get('id');
       
     
        if(id){
          this.employeeServices.getEmployee(1)
          .subscribe({
            next:(response)=>{
              this.employeeDetails=response;
            }
          })
        }
      }
    })
  }
  updateEmployee(){
    this.employeeServices.updateEmployee(
      this.employeeDetails.id,this.employeeDetails
    )
    .subscribe({next:(response)=>{
      this.router.navigate(['employee']);
    }})
  }

}
