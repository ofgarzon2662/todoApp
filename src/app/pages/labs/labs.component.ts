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

    name = 'Juan';
    edad = 25;
    disabled = true;
    img = 'https://angular.io/assets/images/logos/angular/angular.svg';

    person = {
      name: 'Juan',
      age: 25,
      avatar: 'https://angular.io/assets/images/logos/angular/angular.svg'
    };

    clickHandler() {
      alert('Hola!')
    }

    changeHandler(event: Event) {
      console.log(event);
    }

    keydownHandler(event: KeyboardEvent) {
      const input = event.target as HTMLInputElement;
      console.log(input.value);
    }
}
