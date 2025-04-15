import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() nombre: string = '';
  @Output() sumar = new EventEmitter<number>();
  @Output() restar = new EventEmitter<number>();

  sumarUno() {
    this.sumar.emit(1);
  }

  restarUno() {
    this.restar.emit(1);
  }
}