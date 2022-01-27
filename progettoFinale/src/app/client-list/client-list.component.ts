import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clienti: Client[] = []

  constructor(
    private clientService :  ClientService,
    private router :  Router
  ) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(response => {
      this.clienti = response.content
    })
  }
  detailClient(item: Client) {
    this.router.navigate(['client', item.id, 'detail'])
    
  }
  remove(item: Client) {
    this.clientService.removeClient(item).subscribe(data => {
      this.clienti = this.clienti.filter(ele => ele !== item)
    })
  }

  
  chosenMod: string = "";

  modo(){
    switch(this.chosenMod) {
      case "mod1":
        this.clientService.getByFatturato().subscribe(response => {
          this.clienti = response.content
          this.router.navigate(['client'])
        })
        
        
         break;
      case "mod2":
        this.clientService.getByDataInserimento().subscribe(response => {
          this.clienti = response.content
          this.router.navigate(['client'])
        })
        
         break;
      case "mod3":
        this.clientService.getByDataUltimoContatto().subscribe(response => {
          this.clienti = response.content
          this.router.navigate(['client'])
        })
         break;

         case "mod4":
          this.clientService.getByRagioneSociale().subscribe(response => {
            this.clienti = response.content
            this.router.navigate(['client'])
          })
         break;
    }
  }

}
