import { Item } from './../interface/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [ ]

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens')|| '[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string){
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      atividade: false
    }
    return item
  }

  adicionarItemLista(nomeDoItem: string){
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
  }

  editarItemLista(itemAntigo: Item, nomeEditado: string){
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditado,
      atividade: itemAntigo.atividade
    }

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
  }

  atualizarLocalStorageo(){
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
