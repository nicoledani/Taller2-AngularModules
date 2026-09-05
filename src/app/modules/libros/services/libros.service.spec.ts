import { TestBed } from '@angular/core/testing';

import { LibrosService } from './libros.service';
import { LIBROS } from '../../../core/config/libros.config';

describe('LibrosService', () => {
  let service: LibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getLibros deberia retornar un observable con los datos de libros', (done) => {
    service.getLibros().subscribe(libros => {
      expect(libros).toEqual(LIBROS);
      expect(libros.length).toBe(LIBROS.length);
      done();
    })
  })
});
