import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-onlyemployee',
  templateUrl: './onlyemployee.component.html',
  styleUrls: ['./onlyemployee.component.css']
})
export class OnlyemployeeComponent implements OnInit{
  user = new User();
  currentUser:User = new User();

  constructor(private service:EmployeeService){}
  ngOnInit(): void {
    this.currentUser = this.service.getCurrentUser();
    this.service.getEmployee(this.currentUser.id).subscribe(data=>{
      this.user = data.serviceResponse;
    })
    throw new Error('Method not implemented.');
  }

 

}
