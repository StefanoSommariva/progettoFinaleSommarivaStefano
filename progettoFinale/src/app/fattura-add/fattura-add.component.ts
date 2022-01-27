import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { Fattura } from '../classes/fattura';
import { Stato } from '../classes/stato';
import { ClientService } from '../services/client.service';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-add',
  templateUrl: './fattura-add.component.html',
  styleUrls: ['./fattura-add.component.css']
})
export class FatturaAddComponent implements OnInit {

  fattura: Fattura = new Fattura()

  stato:Stato[] = []

  clienti:Client[] = []

  constructor(
    private clientService: ClientService,
    private fatturaService : FatturaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fatturaService.getStatoFattura().subscribe(data => {
      this.stato = data.content

    })
    this.clientService.getAllClients().subscribe(data => {
      this.clienti = data.content
 
    })
  }
  newFattura() {
    this.fattura.data = new Date("2020-12-15T22:22:04.571+00:00")
    this.fatturaService.createFattura(this.fattura).subscribe(response => console.log(response))
    this.router.navigate(['fatture'])
  }
  

}
