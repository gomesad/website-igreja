import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [],
  template: `
    <div style="padding: 1rem; background-color: #eee;">
      <! -- Widgets serão inseridos aqui -->
      <h3>Widgets</h3>
      <p>Área para Rádio Online, Devocional e outros widgets.</p>
    </div>
  `,
  styles: []
})
export class WidgetsComponent { }