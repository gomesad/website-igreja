import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-localizacao-contato',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h2>Localização e Contato</h2>

      <h3>Sede</h3>
      <p>Rua Jacareí 378, Sumaré, Caraguatatuba - SP</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.746797888572!2d-45.41328862362349!3d-23.62898597880829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc47a4f117897d%3A0x999689113ba4b994!2sR.%20Jacare%C3%AD%2C%20378%20-%20Sumar%C3%A9%2C%20Caraguatatuba%20-%20SP%2C%2011665-300!5e0!3m2!1spt-BR!2sbr!4v1713281489931!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <h3>Congregação Massaguaçu</h3>
      <p>Rua Antonio Alexandre 195, Massaguaçú, Caraguatatuba - SP</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.988499477834!2d-45.36112222362478!3d-23.67227787876827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc498d18a87901%3A0x28a9c43f16487d71!2sR.%20Ant%C3%B4nio%20Alexandre%2C%20195%20-%20Massagua%C3%A7u%2C%20Caraguatatuba%20-%20SP%2C%2011672-010!5e0!3m2!1spt-BR!2sbr!4v1713281617136!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <h3>Congregação Pegorelli</h3>
      <p>Av Avelino Alves dos Santos 405, Pegorelli, Caraguatatuba - SP</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.780888638389!2d-45.39115852362423!3d-23.65299997878681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc484e3a72a4d1%3A0x181a915625857296!2sAv.%20Avelino%20Alves%20dos%20Santos%2C%20405%20-%20Pegorelli%2C%20Caraguatatuba%20-%20SP%2C%2011671-000!5e0!3m2!1spt-BR!2sbr!4v1713281729328!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <h3>Congregação Planalto do Sul</h3>
      <p>Rua Ilda Pereira da Silva 288, Planalto do Sul - SP</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.908485758995!2d-45.39587722362338!3d-23.62508897881188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc48567c518a61%3A0x9c034c9c223a8206!2sR.%20Ilda%20Pereira%20da%20Silva%2C%20288%20-%20Planalto%20do%20Sul%2C%20Caraguatatuba%20-%20SP%2C%2011665-660!5e0!3m2!1spt-BR!2sbr!4v1713281852524!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <h3>Contato</h3>
      <p>Telefone: (12) 3456-7890</p>
      <p>Email: contato&#64;igrejaexemplo.com.br</p>
    </div>
  `,
  styles: []
})
export class LocalizacaoContatoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Aqui poderíamos adicionar lógica para carregar o mapa dinamicamente com a API do Google Maps
  }
}