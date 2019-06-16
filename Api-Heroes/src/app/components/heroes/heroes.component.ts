import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../model/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.listHeroes();
  }

  list = true;
  detail = false;

  listHeroes() {
    this.heroesService.getHeroes()
      .subscribe(res => {
        this.heroesService.heroes = res as {};
      });

  }
  mostrarHeroe(heroe: Heroe, event) {
    console.log('evento', event);
    // event.stopPropagation();
    this.modal = heroe;
    this.list = false;
    this.detail = true;
    

  }

  modal: Heroe = new Heroe;

  votoLike(id) {
    
    id = id + ' Likes';
    console.log(id);
    if(!localStorage[id]){
      localStorage.setItem(id,'1');
      console.log('GUARDADO => ',localStorage.getItem(id));
    } else {
      var likei = parseInt(localStorage.getItem(id));
      likei++
      var likes = likei.toString();
      localStorage.setItem(id, likes)
      console.log('GUARDADO => ',localStorage.getItem(id));
    }
  }

  votoDislike(id) {
    id = id + ' Dislikes';
    console.log(id);
    if(!localStorage[id]){
      localStorage.setItem(id,'1');
      console.log('GUARDADO => ',localStorage.getItem(id));
    } else {
      var likei = parseInt(localStorage.getItem(id));
      likei++
      var likes = likei.toString();
      localStorage.setItem(id, likes)
      console.log('GUARDADO => ',localStorage.getItem(id));
    }
  }

  return(){
    this.list = true;
    this.detail = false;
  }
}
