import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-list',
  templateUrl: './fattura-list.component.html',
  styleUrls: ['./fattura-list.component.css']
})
export class FatturaListComponent implements OnInit {


  fattura: Fattura[] = []

  constructor(
    private fatturaService: FatturaService,
    private router :  Router
  ) { }

  ngOnInit(): void {
    this.fatturaService.fattureGetAll().subscribe(response => {
      this.fattura = response.content
 
    })
  }
  detailFattura(item:Fattura) {
    this.router.navigate(['fatture', item.id,'detail'])
  }
  remove(item: Fattura) {
    this.fatturaService.removeFattura(item).subscribe(data => {
      this.fattura = this.fattura.filter(ele => ele !== item)
    })
  }
 
  chosenMod: string = "";

  modo(){
    switch(this.chosenMod) {
      case "mod1":
        this.fatturaService.getBystato().subscribe(response => {
          this.fattura = response.content
      
          this.router.navigate(['fatture'])
        })
        
        
         break;
      case "mod2":
        this.fatturaService.getByAnno().subscribe(response => {
          this.fattura = response.content
      
          this.router.navigate(['fatture'])
        })
        
         break;
      case "mod3":
        this.fatturaService.getByData().subscribe(response => {
          this.fattura = response.content
       
          this.router.navigate(['fatture'])
        })
         break;

         case "mod4":
          this.fatturaService.getByImporto().subscribe(response => {
            this.fattura = response.content
      
            this.router.navigate(['fatture'])
          })
         break;
    }
  }

}
