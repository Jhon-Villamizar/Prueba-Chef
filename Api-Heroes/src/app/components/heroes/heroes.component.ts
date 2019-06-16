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
  // estado de los elemnetos lista y personal para la vista
  list = true;
  detail = false;
  // metodo que trae todos los elementos del api
  listHeroes() {
    this.heroesService.getHeroes()
      .subscribe(res => {
        this.heroesService.heroes = res as {};
      });

  }

  // metodo que selecciona y muestra el personaje seleccionado
  mostrarHeroe(heroe: Heroe, event) {
    this.modal = heroe;
    this.list = false;
    this.detail = true;


  }
  modal: Heroe = new Heroe;
  // metodo que selecciona el heroe y le asigna el vito like y lo guarda en localstorage
  votoLike(id) {
    id = id + ' Likes';
    if (!localStorage[id]) {
      localStorage.setItem(id, '1');
    } else {
      var likei = parseInt(localStorage.getItem(id));
      likei++
      var likes = likei.toString();
      localStorage.setItem(id, likes)
    }
  }

  // metodo que selecciona el heroe y le asigana el voto dislike y lo guarda en localstorage
  votoDislike(id) {
    id = id + ' Dislikes';
    if (!localStorage[id]) {
      localStorage.setItem(id, '1');
    } else {
      var likei = parseInt(localStorage.getItem(id));
      likei++
      var likes = likei.toString();
      localStorage.setItem(id, likes)
    }
  }

  // metodo que retorna de la vista personal a lista 
  return() {
    this.list = true;
    this.detail = false;
  }
}
