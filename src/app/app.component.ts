import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{descr}}</h2>
    <p>{{text}}</p>
    <app-countries-list></app-countries-list>`,
  styles: [`h1 {color: red; text-align: center;}h2 {color: green; text-align: center;}`]
})
export class AppComponent {
  title = 'My Custom Element';
  descr = 'Title description';
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eveniet ' +
    'explicabo incidunt, libero odio recusandae! Consequatur earum nulla praesentium veniam.';
}
