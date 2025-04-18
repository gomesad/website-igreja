import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para *ngIf

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [CommonModule], // Adicionar CommonModule aqui
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent {
  isExpanded: boolean = true; // Estado inicial: expandido

  toggleExpand() {
    this.isExpanded = !this.isExpanded; // Inverte o estado
  }
}
