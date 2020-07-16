import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Product } from './product.model'
import { map, catchError } from 'rxjs/operators';

/**
 * @author atnunes
 * @since 02/07/2020
 * @description CRUD de produtos para aprendizado em Angular
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"
  errUrl = "https://http.cat/404"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void{
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
    
   }

  

   create(product: Product): Observable<Product> {
     return this.http.post<Product>(this.baseUrl, product).pipe(
       map(obj => obj),
       catchError(e => this.errorHandler(e))
     );
   }

   

   read(): Observable<Product[]> {
     return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
   }

   readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
   }
   
    update(product: Product ): Observable<Product> {
     const url = `${this.baseUrl}/${product.id}`
     return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
   }

   delete(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any):Observable<any>{
    this.showMessage("Erro", true)
    open(this.errUrl)
    return EMPTY
 }
}
