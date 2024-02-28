import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path:'home' , component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'product/:id' , component:ProductComponent}
    

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

