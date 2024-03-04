import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  user = new User();
  msg = '';

  constructor(private service:EmployeeService, private router:Router){ }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  registerUser(){
    this.service.registerUser(this.user).subscribe(
      data =>{
        console.log(data)
        if(data.serviceStatus = 'Success'){
          this.msg=data.serviceResponse;
          alert("registered successfully")
          this.router.navigate(['/login'])
        }else{
          this.router.navigate([''])
        }
      }
    )
  }

}
