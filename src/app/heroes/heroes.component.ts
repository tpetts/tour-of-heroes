import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

export interface Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  // hero: Hero = {
  //   id: 1
  //   , name: 'Wonder Woman'
  // };

  constructor() { }

  ngOnInit(): void {

   
  }

}
