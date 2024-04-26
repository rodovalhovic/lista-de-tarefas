import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit, OnChanges {

  @Input() item!: Item;
  @Output() emitindoParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnChanges(): void { }

  ngOnInit(): void { }

  editarItem(){
    this.emitindoParaEditar.emit(this.item);
  }

  deletarItem(){
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

}
