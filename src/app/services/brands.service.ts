import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }
  getBrands():Observable<any>
  {
     return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
}
