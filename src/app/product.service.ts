import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  currentProduct : Product = new Product();

  setCurrentProduct(product:Product){
    this.currentProduct = product;
  }
  getCurrentProduct(){
    return this.currentProduct;
  }

  constructor(private httpClient:HttpClient) { }

  public getAllProduct():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/getProducts");
  }

  public addProduct(product:Product):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/add",product)
  }

  public deleteItem(id:number):Observable<any>{
    return this.httpClient.delete<any>("http://localhost:8080/delete/"+id)
  }
}
