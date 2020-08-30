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
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './components/manage-products/add-product/add-product.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AddUserComponent } from './components/manage-users/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsListComponent } from './components/manage-products/products-list/products-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    ProductitemComponent,
    ManageProductsComponent,
    AddProductComponent,
    ManageUsersComponent,
    AddUserComponent,
    LoginComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddProductComponent]
})
export class AppModule { }
