import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component'
import { RodapeComponent } from './componentes/rodape/rodape.component'
import { PainelPrincipalComponent } from '../app/componentes/painel-principal/painel-principal.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent,RodapeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loja-jogos';
}
