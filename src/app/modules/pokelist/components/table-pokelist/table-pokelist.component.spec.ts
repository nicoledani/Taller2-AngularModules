import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pokemon } from '../../interfaces/pokelist.interface';
import { TablePokelistComponent } from './table-pokelist.component';

describe('TablePokelistComponent', () => {
  let component: TablePokelistComponent;
  let fixture: ComponentFixture<TablePokelistComponent>;

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
      declarations: [TablePokelistComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TablePokelistComponent);
    component = fixture.componentInstance;
    component.pokemons = mockPokemons;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada pokemon', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.pokemons.length);
  });

  it('debería mostrar los datos del pokemon en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const pokemon = component.pokemons[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(pokemon.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(pokemon.name);
    });
  });

  it('debería renderizar la imagen del pokemon', () => {
    const firstRowImages = fixture.debugElement.queryAll(By.css('tbody tr img'));
    firstRowImages.forEach((img, index) => {
      const pokemon = component.pokemons[index];
      expect(img).toBeTruthy();
      expect(img.nativeElement.getAttribute('src')).toBe(pokemon.image);
      expect(img.nativeElement.getAttribute('alt')).toBe(pokemon.name);
    });
  });
});