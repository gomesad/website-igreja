import { Component } from '@angular/core';

@Component({
  selector: 'app-lideranca',
  standalone: true,
  imports: [],
  template: `
    <div style="padding: 20px;">
      <h2>Liderança</h2>
      <ul>
        <li>Pastor Presidente: Pastor Joel Marques</li>
        <li>Pastor Alex</li>
        <li>Pastor Hélio</li>
        <li>Evangelista Gustavo</li>
        <li>Evangelista Edson</li>
        <li>Presbítero Alexandre</li>
        <li>Presbítero Carlos</li>
        <li>Evangelista Nícolas</li>
      </ul>
    </div>
  `,
  styles: []
})
export class LiderancaComponent { }