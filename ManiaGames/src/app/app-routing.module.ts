import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProductsComponent } from './views/products/products.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "contact", component: ContactComponent},
  { path: "products", component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }