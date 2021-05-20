import { Component, OnInit, NgZone } from '@angular/core';
import { ProductService } from './../shared/product.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})

export class AddProductPage implements OnInit {
  productForm: FormGroup;

  constructor(
    private productAPI: ProductService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.productForm = this.fb.group({
      product_name: [''],
      product_producer: [''],
      product_price: [''],
      product_description: [''],
      product_image: ['']
    })
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.productForm.valid) {
      return false;
    } else {
      this.productAPI.addProduct(this.productForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.productForm.reset();
            this.router.navigate(['/products']);
          })
        });
    }
  }
}
