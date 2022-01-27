import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from '../classes/provincia';
import { ProvinciaData } from '../classes/provincia-data';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {

  province: Provincia[] = [];

  constructor(
    private provinceService: ProvinceService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.provinceService.getAllProvince().subscribe(response => {
      this.province = response.content
    })
  }
  detail(item: Provincia) {
    this.router.navigate(['province', item.id, 'detail'])
  }
  delete(item: Provincia) {
    this.provinceService.removeProvince(item).subscribe(data => {
      this.province = this.province.filter(ele => ele !== item)
    })
  }

}
