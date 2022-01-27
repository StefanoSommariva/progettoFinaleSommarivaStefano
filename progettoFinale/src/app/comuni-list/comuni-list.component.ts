import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { ComuniService } from '../services/comuni.service';


@Component({
  selector: 'app-comuni-list',
  templateUrl: './comuni-list.component.html',
  styleUrls: ['./comuni-list.component.css']
})
export class ComuniListComponent implements OnInit {

 
  comuni:Comune[] = []

  constructor(
    private comuneService : ComuniService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
    this.comuneService.getAllComuni().subscribe(response => {
      this.comuni = response.content
    })
  }
  detail(item: Comune) {
    this.router.navigate(['comuni', item.id,'detail'])
  }
  delete(item: Comune) {
    this.comuneService.removeComune(item).subscribe(data => {
      this.comuni = this.comuni.filter(ele => ele !== item)
    })
  }


}
