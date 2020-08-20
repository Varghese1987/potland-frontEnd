import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { EcartComponent } from './components/ecart/ecart.component';
import { AddProductComponent } from './components/manage-products/add-product/add-product.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path:"",
    component:EcartComponent
  },
  {
    path:"manageProduct",
    component:ManageProductsComponent
  },
  {
    path:"manageUser",
    component:ManageUsersComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
