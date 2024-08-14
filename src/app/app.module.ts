import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { NotfoundedComponent } from './components/notfounded/notfounded.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './components/slider/slider.component';
import { SeconedNavComponent } from './components/seconed-nav/seconed-nav.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundedComponent,
    CategoriesComponent,
    BrandsComponent,
    SliderComponent,
    SeconedNavComponent,
    CartComponent,
    CheckoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
