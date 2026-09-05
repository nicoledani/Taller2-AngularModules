import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { TablePokelistComponent } from '../../components/table-pokelist/table-pokelist.component';
import { Pokemon } from '../../interfaces/pokelist.interface';
import { PokelistService } from '../../services/pokelist.service';
import { ListPokelistComponent } from './list-pokelist.component';

describe('ListPokelistComponent', () => {
  let component: ListPokelistComponent;
  let fixture: ComponentFixture<ListPokelistComponent>;
  let pokelistService: PokelistService;

  const mockPokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      id: 4,
      name: 'Charmander',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPokelistComponent, TablePokelistComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListPokelistComponent);
    component = fixture.componentInstance;
    pokelistService = TestBed.inject(PokelistService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllPokemon al iniciar', () => {
    const spyGetAllPokemon = jest.spyOn(pokelistService, 'getAllPokemon').mockReturnValue(of(mockPokemons));
    fixture.detectChanges();
    expect(spyGetAllPokemon).toHaveBeenCalled();
  });

  it('debería asignar los pokemones recibidos del servicio', () => {
    jest.spyOn(pokelistService, 'getAllPokemon').mockReturnValue(of(mockPokemons));
    fixture.detectChanges();
    expect(component.pokemons).toEqual(mockPokemons);
  });

  it('debería pasar los pokemones al componente table-pokelist', () => {
    jest.spyOn(pokelistService, 'getAllPokemon').mockReturnValue(of(mockPokemons));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TablePokelistComponent))
      .componentInstance;
    expect(tableComponent.pokemons).toEqual(mockPokemons);
  });

  it('debería manejar el error cuando falla getAllPokemon', () => {
    component.pokemons = [];
    const errorResponse = new Error('Error al cargar pokemones');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(pokelistService, 'getAllPokemon').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(pokelistService.getAllPokemon).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.pokemons.length).toBe(0);
  });
});