import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from '../classes/provincia';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-province-edit',
  templateUrl: './province-edit.component.html',
  styleUrls: ['./province-edit.component.css']
})
export class ProvinceEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private provinceService: ProvinceService
  ) { }
  provincia!: Provincia
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.provinceService.detailProvince(p['id']).subscribe(response => {
        this.provincia = response
      })
    })
  }
  update() {
    this.provinceService.updateProvince(this.provincia).subscribe(response => console.log(response)) 
    this.router.navigate(['province'])
  }
}
