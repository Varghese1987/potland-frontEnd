import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EcartComponent } from './components/ecart/ecart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltersComponent } from './components/ecart/filters/filters.component';
import { ProductlistComponent } from './components/ecart/productlist/productlist.component';
import { CartComponent } from './components/ecart/cart/cart.component';
import { CartitemsComponent } from './components/ecart/cart/cartitems/cartitems.component';
import { ProductitemComponent } from './components/ecart/productlist/productitem/productitem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    EcartComponent,
    FiltersComponent,
    ProductlistComponent,
    CartComponent,
    CartitemsComponent,
    ProductitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
