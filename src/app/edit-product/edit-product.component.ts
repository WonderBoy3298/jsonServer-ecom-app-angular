import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductServiceService} from "../services/product-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements  OnInit{

  productId!:number;
  formGroup!:FormGroup;

  constructor(private router:ActivatedRoute, private  productService: ProductServiceService,private  fb:FormBuilder) {
  }


  ngOnInit(): void {

    this.productId =this.router.snapshot.params["prodId"]
    this.productService.getProductById(this.productId).subscribe({
      next:(data)=>{
        this.formGroup = this.fb.group({
          id: this.fb.control(data.id),
          name: this.fb.control(data.name, [Validators.required]),
          price: this.fb.control(data.price,[Validators.min(100)]),
          checked: this.fb.control(data.checked)
        })
      },error:(err)=>{
        console.log("------",err)
      }
    })

  }

  updateProduct(){
    let  product : Product = this.formGroup.value
    console.log(product)
    this.productService.updateProduct(product).subscribe({
      next:(data)=>{
        alert(data)
      }
    })
  }


}
