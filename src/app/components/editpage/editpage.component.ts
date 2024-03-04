import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit{

  id!:number ;
  user:User = new User();

  edit: any;
  constructor(private activerouter:ActivatedRoute, private service:EmployeeService, 
    private router:Router){ }
  
  ngOnInit(): void {
    this.user = new User();
    this.id = this.activerouter.snapshot.params['id'];
    Storage;
    alert("data phonch gya!" + this.id)
    
    this.service.getEmployeeById(this.id)
    .subscribe((data:any) =>{
      this.edit = data;
      console.log(this.edit)
    })
  }

  editUser(){
    this.service.updateEmployee(this.id,this.user).subscribe(data =>{
      console.log(data)
      this.goToEmployeeList();
    })

  }
  goToEmployeeList() {
    this.router.navigate(['/employeelist'])
    throw new Error('Method not implemented.');
  }

}
