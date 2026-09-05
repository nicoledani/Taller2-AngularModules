import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MOVIE_API_URL } from '../../../core/config/movielist.config';
import { GhibliFilm } from '../interfaces/movielist.interface';
import { MovielistService } from './movielist.service';

describe('MovielistService', () => {
  let service: MovielistService;
  let httpTesting: HttpTestingController;

  const mockFilms: GhibliFilm[] = [
    {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      title: 'Castle in the Sky',
      original_title: '天空の城ラピュタ',
      original_title_romanised: 'Tenkū no shiro Rapyuta',
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
      movie_banner: 'https://example.com/banner.jpg',
      description: 'The orphan Sheeta inherited a mysterious crystal.',
      director: 'Hayao Miyazaki',
      producer: 'Isao Takahata',
      release_date: '1986',
      running_time: '124',
      rt_score: '95',
      people: [],
      species: [],
      locations: [],
      vehicles: [],
      url: 'https://ghibliapi.vercel.app/films/2baf70d1-42bb-4437-b551-e5fed5a87abe',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovielistService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(MovielistService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllMovies debería realizar una petición GET a la Studio Ghibli API', (done) => {
    service.getAllMovies().subscribe(() => done());

    const req = httpTesting.expectOne(MOVIE_API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockFilms);
  });

  it('getAllMovies debería mapear la respuesta cruda a películas con id, título, imagen y año', (done) => {
    service.getAllMovies().subscribe((movies) => {
      expect(movies).toEqual([
        {
          id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
          title: 'Castle in the Sky',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
          releaseDate: '1986',
        },
      ]);
      done();
    });

    httpTesting.expectOne(MOVIE_API_URL).flush(mockFilms);
  });

  it('debería emitir un error cuando la petición falla', (done) => {
    service.getAllMovies().subscribe({
      error: (error) => {
        expect(error.status).toBe(500);
        done();
      },
    });

    httpTesting
      .expectOne(MOVIE_API_URL)
      .flush('Internal Server Error', { status: 500, statusText: 'Server Error' });
  });
});