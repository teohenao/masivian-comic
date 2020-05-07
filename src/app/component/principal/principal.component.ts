import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';
import { Comic } from 'src/app/models/comic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  comic:Comic;
  rating:boolean=false;

  constructor(private comicsService:ComicsService) { }

  ngOnInit() {
    this.comicRandom()
  }
  
  //Metodo que se ejecuta al usuario seleccionar una estrella realizando asi la calificacion
  ratingComic(r:number){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have correctly rated the comic '+this.comic.title +' with '+r+' star',
      showConfirmButton: false,
      timer: 3000
    })
  }

  //metodo que consume el servicio que trae un comic aleatorio
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
