import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { CardsMovielistComponent } from '../../components/cards-movielist/cards-movielist.component';
import { Movie } from '../../interfaces/movielist.interface';
import { MovielistService } from '../../services/movielist.service';
import { ListMovielistComponent } from './list-movielist.component';

describe('ListMovielistComponent', () => {
  let component: ListMovielistComponent;
  let fixture: ComponentFixture<ListMovielistComponent>;
  let movielistService: MovielistService;

  const mockMovies: Movie[] = [
    {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      title: 'Castle in the Sky',
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
      releaseDate: '1986',
    },
    {
      id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
      title: 'Grave of the Fireflies',
      image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg',
      releaseDate: '1988',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMovielistComponent, CardsMovielistComponent],
      providers: [provideHttpClient()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListMovielistComponent);
    component = fixture.componentInstance;
    movielistService = TestBed.inject(MovielistService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllMovies al iniciar', () => {
    const spyGetAllMovies = jest.spyOn(movielistService, 'getAllMovies').mockReturnValue(of(mockMovies));
    fixture.detectChanges();
    expect(spyGetAllMovies).toHaveBeenCalled();
  });

  it('debería asignar las películas recibidas del servicio', () => {
    jest.spyOn(movielistService, 'getAllMovies').mockReturnValue(of(mockMovies));
    fixture.detectChanges();
    expect(component.movies).toEqual(mockMovies);
  });

  it('debería pasar las películas al componente cards-movielist', () => {
    jest.spyOn(movielistService, 'getAllMovies').mockReturnValue(of(mockMovies));
    fixture.detectChanges();
    const cardsComponent = fixture.debugElement
      .query(By.directive(CardsMovielistComponent))
      .componentInstance;
    expect(cardsComponent.movies).toEqual(mockMovies);
  });

  it('debería manejar el error cuando falla getAllMovies', () => {
    component.movies = [];
    const errorResponse = new Error('Error al cargar películas');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(movielistService, 'getAllMovies').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(movielistService.getAllMovies).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.movies.length).toBe(0);
  });
});