import { Injectable } from '@angular/core';
import { Fretista } from '../interfaces/fretistas'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FretistaService {
    bd :Fretista[]; 
  constructor() { 
    this.bd = [
        {
          nome:'Alvin',
          veiculo:'Saveiro',
          tipo:'Médio Porte',
          reputacao:'5 ESTRELAS	',
          distancia:'2km',
          numero: '(84) 9.8855-5588'
        },
        {
          nome:'Alvin',
          veiculo:'Saveiro',
          tipo:'Médio Porte',
          reputacao:'5 ESTRELAS	',
          distancia:'2km',
          numero: '(84) 9.8855-5588'
        },
        {
          nome:'Alvin',
          veiculo:'Saveiro',
          tipo:'Médio Porte',
          reputacao:'5 ESTRELAS	',
          distancia:'2km',
          numero: '(84) 9.8855-5588'
        },
        {
          nome:'Alvin',
          veiculo:'Saveiro',
          tipo:'Médio Porte',
          reputacao:'5 ESTRELAS	',
          distancia:'2km',
          numero: '(84) 9.8855-5588'
        },
        {
          nome:'Alvin',
          veiculo:'Saveiro',
          tipo:'Médio Porte',
          reputacao:'5 ESTRELAS	',
          distancia:'2km',
          numero: '(84) 9.8855-5588'
        },
        {
          nome:'Alvin',
          veiculo:'Saveiro',
          tipo:'Médio Porte',
          reputacao:'5 ESTRELAS	',
          distancia:'2km',
          numero: '(84) 9.8855-5588'
        },
      ]
    }
    getFretista(): Observable<Fretista[]>{
        return of(this.bd);  
    }
}

