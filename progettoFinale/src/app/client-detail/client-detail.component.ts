import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { Fattura } from '../classes/fattura';
import { ClientService } from '../services/client.service';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  constructor(
    private fatturaService: FatturaService,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) { }
  client !: Client;

  fattura: Fattura[] = [];

  ngOnInit(): void {
    
    this.route.params.subscribe(p => {
      this.clientService.getClientById(p['id']).subscribe(response => {
        this.client = response
        this.fatturaService.getByClient(p['id']).subscribe(response => {
          this.fattura = response.content
        })
      }
      )
    })

  }
  edit(client: Client) {
    this.router.navigate(['client', client.id, 'edit'])
  }

}
