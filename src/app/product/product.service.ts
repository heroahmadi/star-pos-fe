import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import camelcaseKeys from "camelcase-keys";
import { map, Observable, tap } from "rxjs";

export interface Product {
  id: string;
  productName: string;
  categoriesId: string;
  stock: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/product'

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => camelcaseKeys(response, {deep: true}))
    )
  }
}