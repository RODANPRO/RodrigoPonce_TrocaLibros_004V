/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario {
  id: number;
  nombres: string;
  apellidos: string;
  region: string;
  comuna: string;
  articulos: string;
  genero: string;
  email: string;
  password: string;
}

const ITEMS_KEY = 'my-datos'; //Captura las claves de cada objeto de la clase Usuario

@Injectable({
  providedIn: 'root'
})
export class ServiceregistroService {

  private _storage: Storage; //Atributo de tipo _storage que recibir+a el Storage

  constructor(private storage: Storage) {
    this.init(); //Llamamos al método init()
  }

  async init() {
    const storage = await this.storage.create(); //Crea el almacén (storage) físico. Reserva un espacio en la memoria
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  addUsuario(usr: Usuario): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((usuario: Usuario[]) => {
      if (usuario) {
        usuario.push(usr);
        return this.storage.set(ITEMS_KEY, usuario);
      } else {
        return this.storage.set(ITEMS_KEY, [usr]);
      }
      // eslint-disable-next-line @typescript-eslint/semi
    })
  }

  getUsuario(): Promise<Usuario[]> {
    return this.storage.get(ITEMS_KEY);
  }

  //actualizar información de un objeto
  updateUsuario(usr: Usuario): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((usuario: Usuario[]) => {
      // eslint-disable-next-line eqeqeq
      if (!usuario || usuario.length == 0) {
        return null;
      }
      let newUsr: Usuario[] = [];
      for (let i of usuario) {
        if (i.id === usr.id) {
          newUsr.push(usr);
        }
        else {
          newUsr.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newUsr);
    });
  }

   //Eliminar
   deleteDatos(id: number): Promise<Usuario>{
    return this.storage.get(ITEMS_KEY).then((usuario: Usuario[])=>{
      if (!usuario || usuario.length === 0){
        return null;
      }
      let toKeep: Usuario[] = [];
      for (let i of usuario){
        if (i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }

}


