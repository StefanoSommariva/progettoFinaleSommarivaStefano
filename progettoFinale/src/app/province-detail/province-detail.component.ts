import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from '../classes/provincia';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-province-detail',
  templateUrl: './province-detail.component.html',
  styleUrls: ['./province-detail.component.css']
})
export class ProvinceDetailComponent implements OnInit {

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
  edit(provincia: Provincia) {
    this.router.navigate(['province', provincia.id, 'edit'])
  }

}
