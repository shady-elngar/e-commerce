import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartLogicService {
  numOfCartItems = new BehaviorSubject(0);
  headers: any = { token: localStorage.getItem('userToken') };
  cartId:string=""
  constructor(private _HttpClient: HttpClient) {
    this.getLoggedCart().subscribe((res) => {
      this.numOfCartItems.next(res.numOfCartItems);
      this.cartId=res.data._id

      console.log(res);
    });
  }
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId: productId },
      { headers: this.headers }
    );
  }
  getLoggedCart(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: this.headers,
    });
  }
  removeItem(id: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { headers: this.headers }
    );
  }
  updateQuantity(id: string , count:number): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {count:count},
      { headers: this.headers },
      
    );
  }
  checkout(shipping:object):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${this.cartId}?url=http://localhost:4200`,
  {shippingAddress:shipping},
  { headers: this.headers }
)
  }
}
