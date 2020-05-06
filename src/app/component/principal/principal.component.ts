import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private comicsService:ComicsService) { }

  ngOnInit() {
      this.comicsService.getComit(606).subscribe(res=>{
        console.log(res)
      })
  }

}
