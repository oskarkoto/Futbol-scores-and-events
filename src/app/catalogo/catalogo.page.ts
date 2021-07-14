import { Equipo, Partido } from './catalogo.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  equipos: Equipo[] = [
    {
      nombre: 'Saprissa',
      logo: './assets/img/saprissa.png'
    },
    {
      nombre: 'LDA',
      logo: './assets/img/lda.png'
    }
  ];

  partidos: Partido[] = [
    {
      id: 'partido-1',
      estado: 'En juego',
      equipo1: this.equipos[0],
      equipo2: this.equipos[1],
    },
    {
      id: 'partido-2',
      estado: 'En juego',
      equipo1: this.equipos[1],
      equipo2: this.equipos[0],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
