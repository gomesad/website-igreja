import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { WidgetsComponent } from './components/layout/widgets/widgets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WidgetsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Você pode criar este arquivo para estilos mais específicos do AppComponent
})
export class AppComponent {
  title = 'website-igreja';
}