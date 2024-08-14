import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartLogicService } from 'src/app/services/cart-logic.service';

@Component({
  selector: 'app-seconed-nav',
  templateUrl: './seconed-nav.component.html',
  styleUrls: ['./seconed-nav.component.css'],
})
export class SeconedNavComponent {
  cartNumber:number | undefined
  constructor(private _CartLogicService: CartLogicService) {
    _CartLogicService.numOfCartItems.subscribe((res)=>
    {
        this.cartNumber=res
    })
  }
 
  
}
