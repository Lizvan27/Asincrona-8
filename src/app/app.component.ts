import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Asincrona-8';

  constructor(){}
  
  mostrar(nombre:String, apellido:String, edad:String){

    console.log(nombre, apellido, edad);
  }
    
}

