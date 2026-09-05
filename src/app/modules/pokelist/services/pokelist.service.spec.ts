import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  POKEMON_API_URL,
  POKEMON_IMAGE_BASE_URL,
  POKEMON_LIMIT,
} from '../../../core/config/pokelist.config';
import { PokelistService } from './pokelist.service';

describe('PokelistService', () => {
  let service: PokelistService;
  let httpTesting: HttpTestingController;

  const mockResponse = {
    count: 1302,
    next: null,
    previous: null,
    results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokelistService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(PokelistService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllPokemon debería realizar una petición GET a la PokéAPI', (done) => {
    service.getAllPokemon().subscribe(() => done());

    const req = httpTesting.expectOne(`${POKEMON_API_URL}?limit=${POKEMON_LIMIT}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('getAllPokemon debería mapear la respuesta cruda a pokemons con id, nombre e imagen', (done) => {
    service.getAllPokemon().subscribe((pokemons) => {
      expect(pokemons).toEqual([
        {
          id: 1,
          name: 'Bulbasaur',
          image: `${POKEMON_IMAGE_BASE_URL}1.png`,
        },
        {
          id: 4,
          name: 'Charmander',
          image: `${POKEMON_IMAGE_BASE_URL}4.png`,
        },
      ]);
      done();
    });

    httpTesting.expectOne(`${POKEMON_API_URL}?limit=${POKEMON_LIMIT}`).flush(mockResponse);
  });

  it('debería emitir un error cuando la petición falla', (done) => {
    service.getAllPokemon().subscribe({
      error: (error) => {
        expect(error.status).toBe(500);
        done();
      },
    });

    httpTesting
      .expectOne(`${POKEMON_API_URL}?limit=${POKEMON_LIMIT}`)
      .flush('Internal Server Error', { status: 500, statusText: 'Server Error' });
  });
});