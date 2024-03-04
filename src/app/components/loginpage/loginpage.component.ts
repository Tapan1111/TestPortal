import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit{
  isloggedIn:boolean=false;
  user = new User();
  msg='';

  currentUser:User = new User;

  constructor(private service:EmployeeService,
    private router:Router){ }

  ngOnInit(): void {
    
  }
  onSubmit(){
    console.log(this.user)

    this.service.loginUser(this.user).subscribe(
      data =>{console.log("response received");
      console.log(data);
      if(data.serviceStatus == "Fail"){
        this.msg = data.serviceResponse;
      }
      else{
        this.isloggedIn = true
        let employee = data.serviceResponse;
        this.service.setCurrentUser(employee);
        this.currentUser = this.service.getCurrentUser();

        console.log("Current User data :", this.currentUser);
      }
    }
    )
    
  }

  enterUser(){
    console.log(this.user);
    this.service.checkotp(this.user).subscribe(
   data =>{
    console.log(data);
    console.log(data.serviceResponse ) 
  if(data.serviceResponse && data.serviceStatus === "Success"){
    if(data.serviceResponse && data.serviceResponse.role === "admin"){
      this.router.navigate(['/employeelist'])
    }else if(data.serviceResponse.role === 'employee'){
      this.router.navigate(['/onlyemployee'])
    }
  }else{
    this.msg = data.serviceResponse
    console.log(this.msg);
    
    
  }
    
  }
    
    
    )
  }

}
