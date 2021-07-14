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
      evento: ['Gol de Saprissa', 'Tarjeta Roja en LDA']
    },
    {
      id: '2',
      estado: 'En juego',
      equipo1: this.equipos[1],
      equipo2: this.equipos[0],
      evento: ['Gol de LDA', 'Tarjeta Roja en Saprissa']
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

  deletePartido(catalogoId: string){
    this.partidos = this.partidos.filter(
      partido => {
        return partido.id !== catalogoId;
      }
    );
  }

  agregarEvento(catalogoId: string, mensaje: string){
    return this.partidos.find(partido => catalogoId === partido.id).evento.push(mensaje);
  }

  finalizarPartido(catalogoId: string){
    return this.partidos.find(partido => catalogoId === partido.id).estado = 'Finalizado';
  }

  suspenderPartido(catalogoId: string){
    return this.partidos.find(partido => catalogoId === partido.id).estado = 'Suspendido';
  }
}
