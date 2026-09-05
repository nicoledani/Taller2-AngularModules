import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLibrosComponent } from './list-libros.component';
import { LibrosService } from '../../services/libros.service';
import { TableLibrosComponent } from '../../components/table-libros/table-libros.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { of, throwError } from 'rxjs';
import { LIBROS } from '../../../../core/config/libros.config';
import { By } from '@angular/platform-browser';

describe('ListLibrosComponent', () => {
  let component: ListLibrosComponent;
  let fixture: ComponentFixture<ListLibrosComponent>;
  let librosService: LibrosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListLibrosComponent, TableLibrosComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLibrosComponent);
    component = fixture.componentInstance;
    librosService = TestBed.inject(LibrosService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia llamar a getLibros al inicial', () =>{
    const spyGetLibros = jest.spyOn(librosService, 'getLibros').mockReturnValue(of(LIBROS));
    fixture.detectChanges();
    expect(spyGetLibros).toHaveBeenCalled();
  });

  it('Deberia asignar los libros recibidos del servicio', () => {
    jest.spyOn(librosService, 'getLibros').mockReturnValue(of(LIBROS));
    fixture.detectChanges();
    expect(component.libros).toEqual(LIBROS);
  });

  it('Deberia pasar los libros al componente', () => {
    jest.spyOn(librosService, 'getLibros').mockReturnValue(of(LIBROS));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableLibrosComponent))
      .componentInstance;
    expect(tableComponent.libros).toEqual(LIBROS);
  });

  it('Deberia manejar el error cuando falla getLibros', () => {
    component.libros = [];
    const errorResponse = new Error('Error al cargar lista de libros');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(librosService, 'getLibros').mockReturnValue(throwError(() => errorResponse));
    fixture.detectChanges();
    expect(librosService.getLibros).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.libros.length).toBe(0);
  })
});
