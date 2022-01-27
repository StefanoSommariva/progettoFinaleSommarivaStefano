import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-detail-comune',
  templateUrl: './detail-comune.component.html',
  styleUrls: ['./detail-comune.component.css']
})
export class DetailComuneComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private comuniService: ComuniService,
    private router: Router
  ) { }
  comune!: Comune

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.comuniService.detailComune(p['id']).subscribe(response =>{
        this.comune = response
      })
    })
  }
  edit(comune:Comune) {
    this.router.navigate(['comuni', comune.id, 'edit'])
  }

}
