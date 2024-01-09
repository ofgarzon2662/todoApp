import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear Servicio'
  ]);

    name = signal('Juan');
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
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.name.set(newValue);
    }

    keydownHandler(event: KeyboardEvent) {
      const input = event.target as HTMLInputElement;
      console.log(input.value);
    }
}
