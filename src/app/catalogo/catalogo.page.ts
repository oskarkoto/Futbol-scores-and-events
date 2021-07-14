import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  saprissa: Equipo = [
    {
      nombre: "saprissa",
      logo: "src/assets/img/saprissa.png"
    }
  ];

  lda: Equipo = [
    {
      nombre: "lda",
      logo: "src/assets/img/lda.png"
    }
  ];

  partidos: Partido[] = [
    {
      id: "partido-1",
      estado: "En juego",
      equipo1: saprissa,
      equipo2: lda
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
