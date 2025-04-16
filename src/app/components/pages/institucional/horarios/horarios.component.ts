import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [],
  template: `
    <div style="padding: 20px;">
      <h2>Horários dos Cultos</h2>

      <h3>Sede (Dirigente: Pastor Joel Marques)</h3>
      <ul>
        <li>Segundas e Terças Feiras: Culto de Ensino 19:30hrs</li>
        <li>Quintas Feiras e Domingos: Cultos Regulares 19:00hrs</li>
        <li>1° Sábado de cada mês: Culto de Santa Ceia 19:00hrs</li>
      </ul>

      <h3>Congregação Massaguaçu (Dirigente: Evangelista Gustavo Luis De Souza Ferreira)</h3>
      <ul>
        <li>Quartas Feiras e Domingos: Cultos Regulares 19:00hrs</li>
      </ul>

      <h3>Congregação Pegorelli (Dirigente: Presbítero Alexandre Galdino da Silva)</h3>
      <ul>
        <li>Quartas Feiras e Domingos: Cultos Regulares 19:00hrs</li>
      </ul>

      <h3>Congregação Planalto do Sul (Dirigente: Presbítero Carlos Martins Celestino)</h3>
      <ul>
        <li>Quartas Feiras e Domingos: Cultos Regulares 19:00hrs</li>
      </ul>
    </div>
  `,
  styles: []
})
export class HorariosComponent { }