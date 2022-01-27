import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../classes/client';
import { ClientData } from '../classes/client-data';
import { ComuneData } from '../classes/comune-data';
import { Provincia } from '../classes/provincia';
import { ProvinciaData } from '../classes/provincia-data';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  /* tenandID = "fe_0621"
  bearerToken ="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzEwMDkzOCwiZXhwIjoxNjQzOTY0OTM4fQ.qTjZax_kwAhXKq1NaQ9ycdufxUqAN3_LIz15z7A-EvPjAqedVTNuY9ErFPV5vu7RYC_n7CAHG-pXdWyShIa-zQ"
  headers = new HttpHeaders(); */

  constructor(private http: HttpClient) { 
  /*   this.headers=this.headers
                       .set("Authorization" , this.bearerToken)
                       .set("X-TENANT-ID" , this.tenandID) */
  }
 /*  {headers:this.headers} */
  getAllClients () {
    return this.http.get<ClientData>(environment.clienti)

  }
  getClientById(id: number) {
    return this.http.get<Client>(environment.clientiId+ id)
  }
  updateClient(client: Client) {
    return this.http.put<Client>(environment.clientiId+ client.id, client)
  }
  createClient(client: Client) {
    return this.http.post<Client>(environment.clienti, client)
  }
  removeClient(client :Client) {
    return this.http.delete(environment.option+ 'api/clienti/'+client.id)
  }
  getTipoclients() {
    return this.http.get<string[]>(environment.option + 'api/clienti/tipicliente')
  }
  getByFatturato() {
    return this.http.get<ClientData>(environment.option + 'api/clienti/fatturatoannuale?from=10000&to=33333333')
  }
  getByDataInserimento() {
    return this.http.get<ClientData>(environment.option + 'api/clienti/datainserimento?from=01.01.2021&to=31.12.2021')
  }
  getByDataUltimoContatto() {
    return this.http.get<ClientData>(environment.option + 'api/clienti/dataultimocontatto?from=01.01.2021&to=31.12.2021')
  }
  getByRagioneSociale() {
    return this.http.get<ClientData>(environment.option + 'api/clienti/ragionesociale?nome=tant')
  }
  


}
