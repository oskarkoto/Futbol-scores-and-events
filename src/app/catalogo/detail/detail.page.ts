import { Partido } from './../catalogo.model';
import { CatalogoService } from './../catalogo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  partido: Partido;
  constructor(
    private activatedRoute: ActivatedRoute,
    private catalogoServicio: CatalogoService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

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

  ionViewWillEnter(){
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

  deletePartido(){
    if(this.partido.estado === 'Finalizado'){
      this.alertCtrl.create({header: 'Borrar Partido', message: 'Está seguro que desea borrar el partido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.catalogoServicio.deletePartido(this.partido.id);
            this.router.navigate(['/catalogo']);
          }
        }
      ]}).then(
        alertElement => {
          alertElement.present();
        }
      );
    }else{
      this.alertCtrl.create({
        header: 'Eliminar Partido',
        message: 'Sólamente partidos finalizados pueden ser borrados.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          }
        ]
      }).then(
        alertElement => {
          alertElement.present();
        }
      );
    }
  }

  createEvent(){
    this.alertCtrl.create({ header: 'Nuevo Evento',
      inputs: [
        {
          name: 'evento',
          placeholder: 'Ingrese aquí el nuevo evento'
        }],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Agregar',
            handler: data => {
              this.catalogoServicio.agregarEvento(this.partido.id, data.evento);
              this.router.navigate(['/#']);
            }
          }
        ]
    }).then(
      alertElement => {
        alertElement.present();
      }
    );
  }

  finalizePartido(){
    this.alertCtrl.create({header: 'Finalizar Partido', message: 'Está seguro que desea finalizar el partido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Finalizar',
          handler: () => {
            this.catalogoServicio.finalizarPartido(this.partido.id);
            this.router.navigate(['/catalogo']);
          }
        }
      ]}).then(
        alertElement => {
          alertElement.present();
        }
      );
  }

  suspendPartido(){
    this.alertCtrl.create({header: 'Suspender Partido', message: 'Está seguro que desea suspender el partido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Suspender',
          handler: () => {
            this.catalogoServicio.suspenderPartido(this.partido.id);
            this.router.navigate(['/catalogo']);
          }
        }
      ]}).then(
        alertElement => {
          alertElement.present();
        }
      );
  }

}
