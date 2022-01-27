import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../classes/provincia';
import { ProvinciaData } from '../classes/provincia-data';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-add-provincia',
  templateUrl: './add-provincia.component.html',
  styleUrls: ['./add-provincia.component.css']
})
export class AddProvinciaComponent implements OnInit {

  provincia: Provincia= new Provincia()

  constructor(
    private provinceService: ProvinceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }
  newProvincia() {
    this.provinceService.addProvince(this.provincia).subscribe(response => console.log(response))
    this.router.navigate(['province'])
    console.log(this.provincia)
  }

}
