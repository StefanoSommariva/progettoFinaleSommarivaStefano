import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { Provincia } from '../classes/provincia';
import { ProvinciaData } from '../classes/provincia-data';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-add-comune',
  templateUrl: './add-comune.component.html',
  styleUrls: ['./add-comune.component.css']
})
export class AddComuneComponent implements OnInit {
  comune:Comune = new Comune()

  provincia:Provincia[] = [] 

  constructor(
    private comuniService :ComuniService,
    private provinceService :ProvinceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince().subscribe(data => {
      this.provincia = data.content
    
    })
  }
  newComune() {
    this.comuniService.addComune(this.comune).subscribe(response => console.log(response))
    this.router.navigate(['comuni'])
  }

}
