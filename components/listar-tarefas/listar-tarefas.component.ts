import { Component, OnInit} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
