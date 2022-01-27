import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-edit',
  templateUrl: './fattura-edit.component.html',
  styleUrls: ['./fattura-edit.component.css']
})
export class FatturaEditComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
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
  update() {
    this.fatturaService.updateFattura(this.fattura).subscribe(response => console.log(response))
    this.router.navigate(['fatture'])
  }

}
