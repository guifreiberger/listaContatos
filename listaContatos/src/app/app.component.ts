import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listaContatos';

  nome : string ='';
  telefone : string ='';
  user : string ='';
  users =[
  {nome: 'Usuário', telefone: 'Telefone'}
]

constructor (private httpClient : HttpClient){

}

public addUser(){
  this.users.push({nome:this.nome, telefone: this.telefone})

  console.log(this.nome, this.telefone);
}
}