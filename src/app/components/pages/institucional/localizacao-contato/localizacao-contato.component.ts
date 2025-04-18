import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-localizacao-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './localizacao-contato.component.html',
  styleUrls: ['./localizacao-contato.component.scss']
})
export class LocalizacaoContatoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Aqui poderíamos adicionar lógica para carregar o mapa dinamicamente com a API do Google Maps
  }
}