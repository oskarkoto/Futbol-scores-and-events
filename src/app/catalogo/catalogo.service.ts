import { Equipo, Partido } from './catalogo.model';
import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private equipos: Equipo[] = [
    {
      nombre: 'Deportivo Saprissa',
      logo: './assets/img/Escudo_DS.png'
    },
    {
      nombre: 'Liga Deportiva Alajuelense',
      logo: './assets/img/Escudo_LDA.png'
    },
    {
      nombre: 'Municipal Grecia',
      logo: './assets/img/Escudo_MG.png'
    },
    {
      nombre: 'Asociación Deportiva San Carlos',
      logo: './assets/img/Escudo_ADSC.png'
    },
    {
      nombre: 'Club Sport Cartaginés',
      logo: './assets/img/Escudo_CSC.png'
    },
    {
      nombre: 'Club Sport Herediano',
      logo: './assets/img/Escudo_CSE.png'
    },
    {
      nombre: 'Asociación Deportiva Guanacasteca',
      logo: './assets/img/Escudo_ADG.png'
    },
    {
      nombre: 'Santos de Guápiles',
      logo: './assets/img/Escudo_SG.png'
    },
    {
      nombre: 'Asociación Deportiva Jicaral',
      logo: './assets/img/Escudo_JS.png'
    },
    {
      nombre: 'Municipal Pérez Zeledón',
      logo: './assets/img/Escudo_MPZ.png'
    },
    {
      nombre: 'Guadalupe Fútbol Club',
      logo: './assets/img/Escudo_GFC.png'
    },
    {
      nombre: 'Sporting Football Club',
      logo: './assets/img/Escudo_SSJ.png'
    }
  ];

  private partidos: Partido[] = [
    {
      id: '1',
      estado: 'En juego',
      equipo1: this.equipos[0],
      equipo2: this.equipos[1],
      gol1: '1',
      gol2: '1',
      evento: ['Inicia el partido','Goool','Tarjeta Amarilla a Saprissa','Goool']
    },
    {
      id: '2',
      estado: 'En juego',
      equipo1: this.equipos[9],
      equipo2: this.equipos[2],
      gol1: '2',
      gol2: '4',
      evento: ['Inicia el partido','Saque de puerta','Tarjeta roja','Goool']
    },
    {
      id: '3',
      estado: 'Finalizado',
      equipo1: this.equipos[5],
      equipo2: this.equipos[7],
      gol1: '3',
      gol2: '0',
      evento: ['Inicia el partido', 'Goool','Goool','Goool','Finaliza el partido']
    },
    {
      id: '4',
      estado: 'En juego',
      equipo1: this.equipos[11],
      equipo2: this.equipos[8],
      gol1: '4',
      gol2: '1',
      evento: ['Inicia el partido','Autogol','Goool','Goool','Goool']
    },
    {
      id: '5',
      estado: 'Suspendido',
      equipo1: this.equipos[10],
      equipo2: this.equipos[6],
      gol1: '0',
      gol2: '0',
      evento: ['Inicia el partido','Tarjeta roja','Penal','Se suspende el partido']
    },
    {
      id: '6',
      estado: 'En juego',
      equipo1: this.equipos[3],
      equipo2: this.equipos[4],
      gol1: '1',
      gol2: '2',
      evento: ['Inicia el partido, gol de Cartago', 'Goool de Cartago', 'Tiro de esquina', 'Goool de San Carlos']
    }
  ];

  constructor() { }
  getAll(){
    return [...this.partidos];
  }

  getPartido(catalogoId: string){
    return {...this.partidos.find(
      // eslint-disable-next-line arrow-body-style
      partido => {
        return catalogoId === partido.id;
      }
    )};
  }

  deletePartido(catalogoId: string){
    this.partidos = this.partidos.filter(
      // eslint-disable-next-line arrow-body-style
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
