import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Asincrona-8';

  clientes: any[] = [];

  cliente: any = {};

  nombre: String = " ";
  apellido: String = " ";
  edad: number = 0;

  mostrar(){
    this.clientes.push(this.cliente);

    this.cliente = {};
  }
    
}

