// Define que essa classe pode ser injetada em
// outros componentes ou serviços do Angular. 
import { Injectable } from '@angular/core'; 
//Permite realizar requisições HTTP para consumir APIs
//É necessário importar o módulo HttpClientModule no app.module.ts para poder usá-lo. 
import { HttpClient } from '@angular/common/http'; 
//Representa valores assíncronos que podem ser emitidos ao longo do tempo.
//Útil para requisições HTTP, pois a resposta pode demorar.
import { Observable } from 'rxjs'; 
 
@Injectable({ 
 providedIn: 'root' 
}) 
export class ProdutoService { 
 private apiUrl = 'http://localhost:3000/produtos'; 
 
 constructor(private http: HttpClient) {} 
 
 obterProdutos(): Observable<any[]> { 
 return this.http.get<any[]>(this.apiUrl); 
 } 
 
 obterProdutoPorId(id: number): Observable<any> { 
 return this.http.get<any>(`${this.apiUrl}/${id}`); 
 } 
 
 adicionarProduto(produto: any): Observable<any> { 
 return this.http.post<any>(this.apiUrl, produto); 
 } 
 
 atualizarProduto(id: number, produto: any): Observable<any> { 
 return this.http.put<any>(`${this.apiUrl}/${id}`, produto); 
 } 
 
 deletarProduto(id: number): Observable<any> { 
 return this.http.delete<any>(`${this.apiUrl}/${id}`); 
 } 
}
