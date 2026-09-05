import { Libros } from "../../modules/libros/interfaces/libros.interfaces";

/**
 * Listado de libros para aparecer en la tabla
 * Esta constante simula una fuente de datos (mock) que representa
 * informacion de libros
 */
export const LIBROS: Libros[] = [
  { 
    id: 1,
    titulo: 'El código Da Vinci',
    autor: 'Dan Brown',
    Publicacion: 2003,
    categoria: 'Suspenso',
    paginas: 689
  },
  { 
    id: 2,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    Publicacion: 1967,
    categoria: 'Novela',
    paginas: 417
  },
  { 
    id: 3,
    titulo: 'Orgullo y prejuicio',
    autor: 'Jane Austen',
    Publicacion: 1813,
    categoria: 'Romance',
    paginas: 432
  },
  { 
    id: 4,
    titulo: 'Crimen y castigo',
    autor: 'Fiódor Dostoyevski',
    Publicacion: 1866,
    categoria: 'Drama',
    paginas: 671
  },
  { 
    id: 5,
    titulo: 'La sombra del viento',
    autor: 'Carlos Ruiz Zafón',
    Publicacion: 2001,
    categoria: 'Suspenso',
    paginas: 565
  },
  { 
    id: 6,
    titulo: 'Los miserables',
    autor: 'Victor Hugo',
    Publicacion: 1862,
    categoria: 'Drama',
    paginas: 1232
  },
  { 
    id: 7,
    titulo: 'Anna Karenina',
    autor: 'León Tolstói',
    Publicacion: 1877,
    categoria: 'Romance',
    paginas: 864
  },
  { 
    id: 8,
    titulo: 'El nombre de la rosa',
    autor: 'Umberto Eco',
    Publicacion: 1980,
    categoria: 'Suspenso',
    paginas: 512
  },
  { 
    id: 9,
    titulo: 'Madame Bovary',
    autor: 'Gustave Flaubert',
    Publicacion: 1857,
    categoria: 'Drama',
    paginas: 329
  },
  { 
    id: 10,
    titulo: 'Drácula',
    autor: 'Bram Stoker',
    Publicacion: 1897,
    categoria: 'Suspenso',
    paginas: 418
  },
  { 
    id: 11,
    titulo: 'Romeo y Julieta',
    autor: 'William Shakespeare',
    Publicacion: 1597,
    categoria: 'Romance',
    paginas: 160
  },
  { 
    id: 12,
    titulo: 'La metamorfosis',
    autor: 'Franz Kafka',
    Publicacion: 1915,
    categoria: 'Drama',
    paginas: 201
  }
];