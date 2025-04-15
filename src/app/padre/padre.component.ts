import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component'; // Importa el componente hijo

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent], // Agrega el componente hijo a los imports
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  nombre: string = 'Estudiante'; // Nombre inicial
  contadorEstudiante: number = 0; // Contador para Estudiante
  contadorProgramador: number = 0; // Contador para Programador Junior

  // Método para actualizar el contador según el nombre actual
  actualizarContador(valor: number) {
    if (this.nombre === 'Estudiante') {
      this.contadorEstudiante += valor;
    } else if (this.nombre === 'Programador Junior') {
      this.contadorProgramador += valor;
    }
  }

  // Método para restar del contador según el nombre actual
  restarContador(valor: number) {
    if (this.nombre === 'Estudiante' && this.contadorEstudiante > 0) {
      this.contadorEstudiante -= valor;
    } else if (this.nombre === 'Programador Junior' && this.contadorProgramador > 0) {
      this.contadorProgramador -= valor;
    }
  }

  // Método para cambiar el nombre
  cambiarNombre() {
    this.nombre = this.nombre === 'Estudiante' ? 'Programador Junior' : 'Estudiante';
  }

}