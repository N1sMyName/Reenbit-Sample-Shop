import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, throwIfEmpty } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Category } from './db/categories.model';
import { Product } from './db/Product.model';


@Injectable({
  providedIn: 'root',
})
export class MimicrestService {
  private productsUrl = 'api/products/';
  private categoriesUrl = 'api/categories/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  
 
 
}
