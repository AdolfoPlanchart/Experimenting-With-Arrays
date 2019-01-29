import { Component, Inject } from '@angular/core';
import { ArraysService } from "./arrays.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Metas semanales!';

  cut(index){
    this.array.newArray.splice(index, 1);
  }

  clear(){
    this.array.newArray=[];
  }

  push(value){
    if(!value){
      this.array.nullError = 'Error: no ingresaste ningun dato!';
  } else {
      this.array.nullError = '';
      this.array.newArray.push(value);
  }
}
  constructor(
    @Inject('array') private array
  ){}
}
