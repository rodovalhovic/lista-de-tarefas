import { Item } from '../../interface/item';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-tarefas.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss']
})
export class CadastrarTarefaComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado!: Item;
  editando = false;
  textoBtn = "Adicionar";
  valorItem! : string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = "Salvar";
    }
  }

  editarItem(){
    this.listaService.editarItemLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo;
    this.editando = false;
    this.textoBtn = "Salvar"
  }

  adicionarItem(){
    this.listaService.adicionarItemLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = '';
  }

}
