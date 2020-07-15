import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

/**
 * @author atnunes
 * @since 02/07/2020
 * @description CRUD de produtos para aprendizado em Angular
 * 
 */

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProducts(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Sucesso!')
      this.router.navigate(['/products'])
       })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

 
}