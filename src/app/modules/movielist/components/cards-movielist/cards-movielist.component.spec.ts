import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Movie } from '../../interfaces/movielist.interface';
import { CardsMovielistComponent } from './cards-movielist.component';

describe('CardsMovielistComponent', () => {
  let component: CardsMovielistComponent;
  let fixture: ComponentFixture<CardsMovielistComponent>;

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
      declarations: [CardsMovielistComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardsMovielistComponent);
    component = fixture.componentInstance;
    component.movies = mockMovies;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una card por cada película', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(component.movies.length);
  });

  it('debería mostrar la imagen como elemento principal de cada card', () => {
    const images = fixture.debugElement.queryAll(By.css('.card-img-top'));
    expect(images.length).toBe(component.movies.length);

    images.forEach((img, index) => {
      const movie = component.movies[index];
      expect(img.nativeElement.getAttribute('src')).toBe(movie.image);
      expect(img.nativeElement.getAttribute('alt')).toBe(movie.title);
    });
  });

  it('debería mostrar el título de cada película', () => {
    const titles = fixture.debugElement.queryAll(By.css('.card-title'));
    titles.forEach((title, index) => {
      expect(title.nativeElement.textContent.trim()).toBe(component.movies[index].title);
    });
  });

  it('debería mostrar el año de cada película', () => {
    const years = fixture.debugElement.queryAll(By.css('.badge'));
    years.forEach((year, index) => {
      expect(year.nativeElement.textContent.trim()).toBe(component.movies[index].releaseDate);
    });
  });
});