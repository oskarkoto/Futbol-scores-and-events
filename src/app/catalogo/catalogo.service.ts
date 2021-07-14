import { Equipo, Partido } from './catalogo.model';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private equipos: Equipo[] = [
    {
      nombre: 'Saprissa',
      logo: './assets/img/saprissa.png'
    },
    {
      nombre: 'LDA',
      logo: './assets/img/lda.png'
    }
  ];

  private partidos: Partido[] = [
    {
      id: '1',
      estado: 'En juego',
      equipo1: this.equipos[0],
      equipo2: this.equipos[1],
    },
    {
      id: '2',
      estado: 'En juego',
      equipo1: this.equipos[1],
      equipo2: this.equipos[0],
    }
  ];

  constructor() { }
  getAll(){
    return [...this.partidos];
  }

  getPartido(catalogoId: string){
    return {...this.partidos.find(
      partido => {
        return catalogoId === partido.id;
      }
    )};
  }

  delete(){

  }

  create(){

  }
}
