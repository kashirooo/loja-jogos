import { Routes } from '@angular/router';

import { PainelPrincipalComponent } from '../app/componentes/painel-principal/painel-principal.component';
import { CadastroProdutoComponent } from './componentes/cadastro-produto/cadastro-produto.component';

export const routes: Routes = [
        { path: 'painel-principal', component: PainelPrincipalComponent }, // Painel principal
        { path: 'cadastro-produto', component: CadastroProdutoComponent }, // Cadastro de novo produto
        { path: 'cadastro-produto/:id', component: CadastroProdutoComponent }, // Edição de produto
        { path: '', redirectTo: '/painel-principal', pathMatch: 'full' } //Redirecionamento padrão
];
