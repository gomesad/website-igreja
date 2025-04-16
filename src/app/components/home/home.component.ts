import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div style="padding: 20px; text-align: center;">
      <h1>Bem-vindos à Igreja Cruzada Intensiva</h1>
      <p>Este é o conteúdo da página inicial. Ele será atualizado nas próximas sprints.</p>
    </div>
  `,
  styles: []
})
export class HomeComponent { }