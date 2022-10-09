import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Douglas'
  age: number = 29
  job: string = 'Software Developer'
  hobbies: string[] = ['Correr', 'Jogar', 'Estudar']
  car: { name: string; year: number } = {
    name: 'Polo',
    year: 2019
  }

  constructor() { }

  ngOnInit(): void {
  }

}
