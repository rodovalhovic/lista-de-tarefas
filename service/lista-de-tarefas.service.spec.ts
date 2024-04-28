/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import * as listaDeTarefasService from './lista-de-tarefas.service';

describe('Service: ListaDeTarefas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [listaDeTarefasService.ListaDeTarefasService]
    });
  });

  it('should ...', inject([listaDeTarefasService.ListaDeTarefasService], (service: listaDeTarefasService.ListaDeTarefasService) => {
    expect(service).toBeTruthy();
  }));
});
