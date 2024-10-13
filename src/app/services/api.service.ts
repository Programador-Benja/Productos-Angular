import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDProducts } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';
  
  getProducts():Observable<IDProducts[]> {
    return this._http.get<IDProducts[]>(this.urlBase);
  }
  getProduct(id: number):Observable<IDProducts> {
    return this._http.get<IDProducts>(`${this.urlBase}/${id}`);
  }
  constructor() { }
}
