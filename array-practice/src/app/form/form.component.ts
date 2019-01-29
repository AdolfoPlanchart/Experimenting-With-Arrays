import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <input type="text" #input (keyup.enter)="update.emit(input.value); input.value=''">

    <br>
    <br>

    <button (click)="update.emit(input.value); input.value=''">Añadir una nueva meta</button>
  `,
  styles: []
})
export class FormComponent implements OnInit {

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
