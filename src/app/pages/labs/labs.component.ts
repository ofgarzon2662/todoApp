import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente'  ];

}
