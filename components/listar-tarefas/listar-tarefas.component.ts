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

  listaTarefas = [
    {
      id: '1',
      fazer: 'Tirar o lixo',
    },
    {
      id: '2',
      fazer: 'Lavar o quintal',
    },
    {
      id: '3',
      fazer: 'Varrer a cozinha',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
