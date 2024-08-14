import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundedComponent } from './components/notfounded/notfounded.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home" , component:AllProductsComponent},
  {path:"productdetails/:id" , component: ProductDetailsComponent},
  {path : "register" , component:RegisterComponent},
  {path:"login" , component: LoginComponent},
  {path:"categories" , component:CategoriesComponent},
  {path:"brands" , component:BrandsComponent},
  {path:"cart" , component:CartComponent},
  {path:"checkout" , component:CheckoutComponent},
  {path:"**" , component:NotfoundedComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
