import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any[]=[]
constructor(private _CategoriesService:CategoriesService){}
ngOnInit(): void{
  this._CategoriesService.getCtegories().subscribe((res)=>
  {
    this.categories=res.data
    console.log(res.data)
  })
}
}
