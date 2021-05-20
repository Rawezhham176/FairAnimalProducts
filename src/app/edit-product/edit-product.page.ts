import { Component, OnInit } from '@angular/core';
import { ProductService } from './../shared/product.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {


  updateProductForm: FormGroup;
  id: any;

  constructor(
    private productAPI: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getProductData(this.id);
    this.updateProductForm = this.fb.group({
      product_name: [''],
      product_producer: [''],
      product_price: [''],
      product_description: [''],
      product_image: ['']
    })
  }

  getProductData(id) {
    this.productAPI.getProduct(id).subscribe(res => {
      this.updateProductForm.setValue({
        product_name: res['product_name'],
        product_producer: res['product_producer'],
        product_price: res['product_price'],
        product_description: res['product_description'],
        product_image: res['product_image']
      });
    });
  }

  updateForm() {
    if (!this.updateProductForm.valid) {
      return false;
    } else {
      this.productAPI.updateProduct(this.id, this.updateProductForm.value)
        .subscribe((res) => {
          console.log(res)
          this.updateProductForm.reset();
          this.router.navigate(['/products']);
        })
    }
  }

}
