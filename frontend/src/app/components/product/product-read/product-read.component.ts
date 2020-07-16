import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

import { MatPaginator } from'@angular/material/paginator';
import { MatSort } from'@angular/material/sort';

import { MatTable } from'@angular/material/table';

import { ReadDataSource } from './product-read-datasource';



/**
 * @author atnunes
 * @since 02/07/2020
 * @description CRUD de produtos para aprendizado em Angular
 * 
 */

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ReadDataSource>;
 
  dataSource: ReadDataSource

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'edit', 'delete']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
     
      console.log(products)
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }
}







