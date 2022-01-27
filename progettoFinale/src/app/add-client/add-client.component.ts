import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { Comune } from '../classes/comune';
import { ComuneData } from '../classes/comune-data';
import { IndirizzoLegale } from '../classes/indirizzo-legale'; 
import { IndirizzoOperativo } from '../classes/indirizzo-operativo';
import { Provincia } from '../classes/provincia';
import { ProvinciaData } from '../classes/provincia-data';
import { ClientService } from '../services/client.service';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client:Client = new Client()
  tipoCliente:string[] = []
  comune:Comune[] = []

  constructor(
    private comuniService :ComuniService,
    private clientService : ClientService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.clientService.getTipoclients().subscribe(data => {
      this.tipoCliente = data
    })
   
    this.comuniService.getAllComuni().subscribe(data => {
      this.comune = data.content
    })

  }

  newClient() {
    this.client.dataInserimento = new Date().toISOString()
    this.client.dataUltimoContatto = new Date().toISOString()
    this.clientService.createClient(this.client).subscribe(response => console.log(response));
    this.router.navigate(['clients'])
   
  }

}
