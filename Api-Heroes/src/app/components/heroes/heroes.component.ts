import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';

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

  listHeroes() {
    this.heroesService.getHeroes()
      .subscribe(res => {
        console.log(res);       
        this.heroesService.heroes = res as {};
      });
  }

}
