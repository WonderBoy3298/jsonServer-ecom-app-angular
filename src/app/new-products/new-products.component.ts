import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../services/product-service.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css'
})
export class NewProductsComponent implements  OnInit{

  public  productForm!:FormGroup
  constructor( private fb:FormBuilder , private ps:ProductServiceService, private  productService:ProductServiceService) {
  }
  ngOnInit(): void {
  this.productForm = this.fb.group({
    name : this.fb.control('',[Validators.required]),
    price : this.fb.control('',[Validators.required]),
    checked : this.fb.control(false),
  })
  }

  saveProduct(){
    let product:Product = this.productForm.value  ;
    this.productService.saveProduct(product).subscribe({
      next:(data) =>{
        alert(JSON.stringify(data))
      },error:(err)=>{
        console.log("this is an error "+ err)
      }
    })

  }

}
