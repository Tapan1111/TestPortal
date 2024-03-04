import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-addproductpage',
  templateUrl: './addproductpage.component.html',
  styleUrls: ['./addproductpage.component.css']
})
export class AddproductpageComponent implements OnInit{
  product = new Product();
  msg='';

  constructor(private service:ProductService, private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProduct(){
    this.service.addProduct(this.product).subscribe(
      data =>{
        console.log(data)
        if(data){
          alert("added successfully")
          this.router.navigate(['/product'])
        }
        

      }
    )
  }







}
