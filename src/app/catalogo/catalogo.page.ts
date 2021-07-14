import { Partido } from './catalogo.model';
import { CatalogoService } from './catalogo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  partidos: Partido[];
  constructor(private catalogoServicio: CatalogoService) { }

  ngOnInit() {
    this.partidos = this.catalogoServicio.getAll();
  }

}
