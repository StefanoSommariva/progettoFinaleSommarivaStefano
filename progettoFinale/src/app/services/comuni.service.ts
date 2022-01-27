import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comune } from '../classes/comune';
import { ComuneData } from '../classes/comune-data';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getAllComuni() {
    return this.http.get<ComuneData>(environment.comuni)
  }
  detailComune(id: number) {
    return this.http.get<Comune>(environment.option+'api/comuni/'+ id)
  }
  addComune(comune: Comune) {
     return this.http.post<Comune>(environment.comuni, comune)
  }
  removeComune(comune: Comune) {
    return this.http.delete(environment.option+ 'api/comuni/' +comune.id)
  }
  updateComune(comune:Comune) {
    return this.http.put<Comune>(environment.option+'api/comuni/'+comune.id, comune )
  }
}
