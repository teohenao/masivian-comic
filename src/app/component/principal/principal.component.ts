import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { Comic } from 'src/app/models/comic';
import Swal from 'sweetalert2';


declare const STABLE_FEATURE: boolean;
declare const EXPERIMENTAL_FEATURE: boolean;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  stableFeature: string;
  experimentalFeature: string;
  comic:Comic;
  rating:boolean=false;

  constructor(private comicsService:ComicsService) { }

  ngOnInit() {
    this.comicRandom()
    this.stableFeature = STABLE_FEATURE ? 'Stable feature enabled' : 'Stable feature disabled';
    this.experimentalFeature = EXPERIMENTAL_FEATURE ? 'Experimental feature enabled' : 'Experimental feature disabled';
  }

  ratingComic(r:number){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have correctly rated the comic '+this.comic.title +' with '+r+' star',
      showConfirmButton: false,
      timer: 3000
    })
  }

  comicRandom(){
    this.rating = false;
    let random= Math.floor(Math.random() * 2302) + 1  
    this.comic = new Comic();
      this.comicsService.getComit(random).subscribe(res=>{
       this.comic = res;
       this.rating = true;
      })
  }
}
