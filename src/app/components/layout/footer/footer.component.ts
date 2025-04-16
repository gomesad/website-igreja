import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer style="background-color: #740102; color: #f8f7f3; padding: 1rem; text-align: center;">
      <p>&copy; 2025 Igreja [Nome da Igreja - Placeholder]. Todos os direitos reservados.</p>
      <p>Sede: Rua Jacareí 378, Sumaré, Caraguatatuba - SP</p>
      <p>Contato: (12) 3456-7890 | contato&#64;igrejaexemplo.com.br</p>
      <! -- Links rápidos e endereços das congregações podem ser adicionados aqui -->
    </footer>
  `,
  styles: []
})
export class FooterComponent { }