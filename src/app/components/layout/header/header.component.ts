import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header style="background-color: #f8f7f3; padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
      <img src="logo_peq.png" alt="Logo da Igreja" style="max-height: 50px;">
      <nav>
        <ul style="list-style: none; padding: 0; margin: 0; display: flex;">
          <li style="margin-left: 1rem;"><a routerLink="/" routerLinkActive="active" style="text-decoration: none; color: #740102;">Início</a></li>
          <li style="margin-left: 1rem;"><a routerLink="/sobre-nos" routerLinkActive="active" style="text-decoration: none; color: #740102;">Sobre Nós</a></li>
          <li style="margin-left: 1rem;"><a routerLink="/palavra-do-pastor" routerLinkActive="active" style="text-decoration: none; color: #740102;">Palavra do Pastor</a></li>
          <li style="margin-left: 1rem;"><a routerLink="/nossas-crencas" routerLinkActive="active" style="text-decoration: none; color: #740102;">Nossas Crenças</a></li>
          <li style="margin-left: 1rem;"><a routerLink="/localizacao" routerLinkActive="active" style="text-decoration: none; color: #740102;">Localização e Contato</a></li>
          <li style="margin-left: 1rem;"><a routerLink="/horarios" routerLinkActive="active" style="text-decoration: none; color: #740102;">Horários</a></li>
          <li style="margin-left: 1rem;"><a routerLink="/lideranca" routerLinkActive="active" style="text-decoration: none; color: #740102;">Liderança</a></li>
          </ul>
      </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent { }