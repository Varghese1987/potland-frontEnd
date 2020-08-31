import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { EcartComponent } from './components/ecart/ecart.component';
import { AddProductComponent } from './components/manage-products/add-product/add-product.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"home",
    pathMatch:"full",
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
  },
  {
    path: 'externalRedirect',
    resolve: {
        url: externalUrlProvider,
    },
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
},
];

@NgModule({
  providers: [
    {
        provide: externalUrlProvider,
        useValue: (route: ActivatedRouteSnapshot) => {
            const externalUrl = route.paramMap.get('externalUrl');
            window.open(externalUrl, '_self');
        },
    },
  ],
  imports: [RouterModule.forRoot(routes,{useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
