import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-detail',
  templateUrl: './fattura-detail.component.html',
  styleUrls: ['./fattura-detail.component.css']
})
export class FatturaDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fatturaService: FatturaService
  ) { }
  fattura!: Fattura

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.fatturaService.getFatturaByid(p['id']).subscribe(response => {
        this.fattura = response
      })
    })
  }
  edit(fattura: Fattura) {
    this.router.navigate(['fatture', fattura.id, 'edit'])
  }

}
