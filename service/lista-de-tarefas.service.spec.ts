/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListaDeTarefasService } from './lista-de-tarefas.service';

describe('Service: ListaDeTarefas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaDeTarefasService]
    });
  });

  it('should ...', inject([ListaDeTarefasService], (service: ListaDeTarefasService) => {
    expect(service).toBeTruthy();
  }));
});
