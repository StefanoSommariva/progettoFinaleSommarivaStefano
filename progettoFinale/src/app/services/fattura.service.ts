import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fattura } from '../classes/fattura';
import { FatturaData } from '../classes/fattura-data';
import { StatoData } from '../classes/stato-data';

@Injectable({
  providedIn: 'root'
})
export class FatturaService {

  constructor(
    private http:HttpClient
  ) { }
  fattureGetAll() {
    return this.http.get<FatturaData>(environment.fatture)
  }
  getFatturaByid(id: number) {
    return this.http.get<Fattura>(environment.fatturaID +id)
  }
  updateFattura(fattura: Fattura) {
    return this.http.put<Fattura>(environment.fatturaID+ fattura.id, fattura)
  }
  createFattura(fattura:Fattura) {
    return this.http.post<Fattura>(environment.fatture, fattura)
  }
  removeFattura(fattura: Fattura) {
    return this.http.delete(environment.fatturaID+fattura.id)
  }
  getStatoFattura() {
    return this.http.get<StatoData>(environment.option + 'api/statifattura?page=0&size=20&sort=id,ASC')
  }
  getByClient(id: number) {
    return this.http.get<FatturaData>(environment.option + 'api/fatture/cliente/'+id+'?page=0&size=20&sort=id,ASC')
  }
  getBystato() {
    return this.http.get<FatturaData>(environment.option +'api/fatture/stato/1?page=0&size=20&sort=id,ASC')
  }
  getByAnno() {
    return this.http.get<FatturaData>(environment.option +'api/fatture/anno/?anno=2020&page=0&size=20&sort=id,ASC')
  }
  getByData() {
    return this.http.get<FatturaData>(environment.option +'api/fatture/data/?from=01.01.2020&to=31.12.2021&page=0&size=20&sort=id,ASC')
  }
  getByImporto() {
    return this.http.get<FatturaData>(environment.option +'api/fatture/importo/?from=1000&to=35000&page=0&size=20&sort=id,ASC')
  }
}
