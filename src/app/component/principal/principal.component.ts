import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  comic:Comic;

  constructor(private comicsService:ComicsService) { }

  ngOnInit() {
    this.comic = new Comic();
      this.comicsService.getComit(611).subscribe(res=>{
       this.comic = res;
       console.log(this.comic)
      })
  }

}
