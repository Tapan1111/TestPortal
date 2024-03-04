import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit{
  product : Product[]=[];

  constructor(private service:ProductService, private router : Router){ }

  ngOnInit(): void {
    this.service.getAllProduct().subscribe(data =>{
      this.product = data
        console.log();
    })
    throw new Error('Method not implemented.');
  }

  deleteItem(product: { id: number; }){
    this.service.deleteItem(product.id).subscribe((data)=>{
      alert("data deleted successfully...")
      this.service.getAllProduct()
      console.log(data)
    },err =>{
      console.log(err)
    })

  }

}
