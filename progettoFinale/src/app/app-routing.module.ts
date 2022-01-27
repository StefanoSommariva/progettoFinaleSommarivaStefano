import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddComuneComponent } from './add-comune/add-comune.component';
import { AddProvinciaComponent } from './add-provincia/add-provincia.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ComuniListComponent } from './comuni-list/comuni-list.component';
import { DetailComuneComponent } from './detail-comune/detail-comune.component';
import { EditComuneComponent } from './edit-comune/edit-comune.component';
import { FatturaAddComponent } from './fattura-add/fattura-add.component';
import { FatturaDetailComponent } from './fattura-detail/fattura-detail.component';
import { FatturaEditComponent } from './fattura-edit/fattura-edit.component';
import { FatturaListComponent } from './fattura-list/fattura-list.component';
import { HomeComponent } from './home/home.component';
import { ProvinceDetailComponent } from './province-detail/province-detail.component';
import { ProvinceEditComponent } from './province-edit/province-edit.component';
import { ProvinceListComponent } from './province-list/province-list.component';

const routes: Routes = [
  {path: "clients", component: ClientListComponent},
  {path: "" , component:HomeComponent },
  {path: "client/:id/detail", component:ClientDetailComponent},
  {path: "client/:id/edit", component: ClientEditComponent},
  {path: "client/new", component: AddClientComponent},
  {path: "comuni" , component: ComuniListComponent},
  {path: "comuni/new", component: AddComuneComponent},
  {path: "comuni/:id/detail", component: DetailComuneComponent},
  {path: "comuni/:id/edit", component: EditComuneComponent},
  {path: "province" , component: ProvinceListComponent},
  {path: "province/new", component: AddProvinciaComponent},
  {path: "province/:id/detail" , component: ProvinceDetailComponent},
  {path: "province/:id/edit" , component: ProvinceEditComponent},
  {path: "fatture", component: FatturaListComponent},
  {path: "fatture/new", component: FatturaAddComponent},
  {path: "fatture/:id/detail", component: FatturaDetailComponent},
  {path: "fatture/:id/edit", component: FatturaEditComponent},
  {path: "client/:id/detail/fatture/:id/detail", component:FatturaDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
