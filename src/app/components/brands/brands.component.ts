import { Component, OnInit } from '@angular/core';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  allBrands:any[]=[]
  constructor(private _BrandsService:BrandsService){}
  ngOnInit(): void{
this._BrandsService.getBrands().subscribe((res)=>
{
  this.allBrands= res.data.slice(0,12)
  console.log(res)
})
  }
}
