import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../classes/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private clientService: ClientService
  ) { }
  client !:Client

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.clientService.getClientById(p['id']).subscribe(response => {
        this.client = response
      })
    })
  }
  update() {
    this.clientService.updateClient(this.client).subscribe(response => console.log(response));
    this.router.navigate(['clients'])
  
  }

}
