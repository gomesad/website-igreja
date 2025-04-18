import { Component, HostListener } from '@angular/core'; // Importar HostListener
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  private mobileBreakpoint: number = 768; // Definir o breakpoint

  // Opcional: fechar menu se redimensionar de mobile para desktop
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > this.mobileBreakpoint) {
      this.isMenuOpen = false; // Fecha o menu se a tela se tornar desktop
    }
  }

  toggleMenu() {
    // Altera o estado SOMENTE se a tela for menor ou igual ao breakpoint mobile
    if (window.innerWidth <= this.mobileBreakpoint) {
      this.isMenuOpen = !this.isMenuOpen;
    }
     // Se a tela for maior, o método não faz nada, mantendo isMenuOpen como false (ou seu estado inicial)
  }
}
