import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HomeComponent } from './home/home.component';
import { ClientDetailComponent } from './client-detail/client-detail.component'
import { HttpInterceptorInterceptor } from './interceptor/http-interceptor.interceptor';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ComuniListComponent } from './comuni-list/comuni-list.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { EditComuneComponent } from './edit-comune/edit-comune.component';
import { DetailComuneComponent } from './detail-comune/detail-comune.component';
import { ProvinceDetailComponent } from './province-detail/province-detail.component';
import { ProvinceEditComponent } from './province-edit/province-edit.component';
import { AddProvinciaComponent } from './add-provincia/add-provincia.component';
import { AddComuneComponent } from './add-comune/add-comune.component';
import { FatturaListComponent } from './fattura-list/fattura-list.component';
import { FatturaDetailComponent } from './fattura-detail/fattura-detail.component';
import { FatturaEditComponent } from './fattura-edit/fattura-edit.component';
import { FatturaAddComponent } from './fattura-add/fattura-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientListComponent,
    HomeComponent,
    ClientDetailComponent,
    ClientEditComponent,
    AddClientComponent,
    ComuniListComponent,
    ProvinceListComponent,
    EditComuneComponent,
    DetailComuneComponent,
    ProvinceDetailComponent,
    ProvinceEditComponent,
    AddProvinciaComponent,
    AddComuneComponent,
    FatturaListComponent,
    FatturaDetailComponent,
    FatturaEditComponent,
    FatturaAddComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
