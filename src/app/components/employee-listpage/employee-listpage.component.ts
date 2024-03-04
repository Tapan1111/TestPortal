import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-employee-listpage',
  templateUrl: './employee-listpage.component.html',
  styleUrls: ['./employee-listpage.component.css']
})
export class EmployeeListpageComponent implements OnInit{
  user : User[]=[];
  

  constructor(private service:EmployeeService, private router : Router){ }


  ngOnInit(): void {
    this.service.getAllEmployeeData().subscribe(data=>{
      this.user  = data.serviceResponse;
      console.log();
      
    throw new Error('Method not implemented.');
  })
}
deleteUser(user: { id: number; }){
  this.service.deleteEntrries(user.id).subscribe(
    (data) =>{
      this.service.getAllEmployeeData()
      console.log(data);
      
    },
    err=>{
      console.log(err);
    }
  );
}
updateEntries(id:number){
  // alert("Updated successfully ")
  this.router.navigate(['/editemployee', id])
  
}

}
