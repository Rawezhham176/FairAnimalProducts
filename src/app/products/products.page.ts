import { Component, OnInit } from '@angular/core';
import { ProductService } from './../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  Products: any = [];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.productService.getProductList().subscribe((res) => {
      console.log(res)
      this.Products = res;
    })
  }

  deleteProduct(product, i) {
    if (window.confirm('Do you want to delete user?')) {
      this.productService.deleteProduct(product._id)
        .subscribe(() => {
          this.Products.splice(i, 1);
          console.log('Product deleted!')
        }
        )
    }
  }
}

