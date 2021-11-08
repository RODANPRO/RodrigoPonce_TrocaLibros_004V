import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceregistroService, Usuario } from 'src/app/services/serviceregistro.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario= {
    nombres:'',
    apellidos:'',
    region:'',
    comuna:'',
    articulos:'',
    genero:'',
    email:'',
    password:''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
