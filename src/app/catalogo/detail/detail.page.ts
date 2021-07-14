import { Partido } from './../catalogo.model';
import { CatalogoService } from './../catalogo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  partido: Partido;
  constructor(private activatedRoute: ActivatedRoute, private catalogoServicio: CatalogoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('catalogoId')){
          //no existe el valor del parametro, redireccione
          return;
        }
        const partidoId = paramMap.get('catalogoId');
        this.partido = this.catalogoServicio.getPartido(partidoId);
      }
    );
  }

}
