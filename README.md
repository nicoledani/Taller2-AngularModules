# 🧪 Taller: Módulos en Angular

- Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) 20.3.14.

- El objetivo del taller es practicar la creación y organización de módulos y componentes en una aplicación Angular.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js
- npm
- Angular CLI
- Git
- Visual Studio Code

Puedes verificar Angular CLI en consola con: ```ng version```

## ▶️ Iniciar el Proyecto en Modo Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

### 1️⃣ Abrir la consola

Ubícate en la raíz del proyecto (donde se encuentra el archivo package.json).

### 2️⃣ Instalar dependencias

```npm i```

### 3️⃣ Ejecutar el proyecto

```npm run start``` o ```ng serve```

### 4️⃣ Abrir en el navegador

Cuando el servidor esté en ejecución, abre un navegador y accede a: `http://localhost:4200/`


## 🧪 Pruebas Unitarias

El proyecto utiliza Jest para la ejecución de pruebas unitarias.

### ▶️ Ejecutar pruebas una sola vez

```npm run test```

### 🔁 Ejecutar pruebas en modo watch

Este modo vuelve a ejecutar las pruebas cada vez que se detecta un cambio en el código.

```npm run test:watch```

### 🔁 Ejecutar coverage de pruebas

Este modo permite ejecutar todas las pruebas unitarias del proyecto y generar un reporte de cobertura, el cual muestra qué porcentaje del código fuente está siendo validado por las pruebas.

```npm run test:coverage```

### 📘 Generar documentación con Compodoc

Este modo permite generar la documentación técnica del proyecto a partir de los comentarios JSDoc en el código fuente, facilitando la visualización de la API del Design System y sus componentes.

El comando genera un sitio estático con la documentación del proyecto, incluyendo componentes, interfaces, tipos, módulos y diagramas de dependencias.

```npm run compodoc```

## 🌐 APIs Consumidas

El proyecto consume la [Studio Ghibli API](https://ghibliapi.vercel.app/) para obtener el listado de películas.

### 🔗 Endpoint de películas

- `GET https://ghibliapi.vercel.app/films`

Este endpoint devuelve un arreglo de películas (`GhibliFilm[]`) con su información
(título, imagen del póster, director, año de estreno, duración, descripción, etc.):

```json
[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
    "release_date": "1986",
    "director": "Hayao Miyazaki"
  }
]
```

### 🎬 Presentación de datos

El servicio `MovielistService` consume la API con `HttpClient` y transforma cada
película cruda (`GhibliFilm`) en un objeto `Movie` listo para la vista, con los
campos `id`, `title`, `image` y `releaseDate`.

### ⚙️ Configuración

El valor de la API está centralizado en `src/app/core/config/movielist.config.ts`:

- `MOVIE_API_URL`: URL base de la Studio Ghibli API.

## ⚙️ Generación de Archivos con Angular CLI
A continuación se presentan los comandos más utilizados para generar módulos y componentes.

### 📦 Generar un módulo con archivo de rutas

```ng g m [ruta]/[nombre-modulo] --routing```

#### Ejemplo:

```ng g m modules/movielist --routing```

#### Archivos Generados

```
src/app/modules/movielist
├──movielist-module.ts
└──movielist-routing-module.ts
```

### 🧩 Generar un componente (con carpeta propia)

```ng g c [ruta]/[nombre-componente] --standalone=false```

#### Ejemplo:

```ng g c modules/movielist/components/cards-movielist --standalone=false```

#### Archivos Generados

```
src/app/modules/movielist/components/cards-movielist/
├── cards-movielist.component.html
├── cards-movielist.component.scss
├── cards-movielist.component.spec.ts
└── cards-movielist.component.ts
```

### 📄 Generar un componente sin carpeta (--flat)

```ng g c [ruta]/[nombre-componente] --standalone=false --flat```

#### Ejemplo:

```ng g c modules/movielist/components/cards-movielist/cards-movielist.component --standalone=false --flat```

#### Archivos Generados

```
src/app/modules/movielist/components/cards-movielist/
├──cards-movielist.component.html
├──cards-movielist.component.scss
├──cards-movielist.component.spec.ts
└──cards-movielist.component.ts
```

### 🎓 Observaciones Importantes

- En este taller NO se utilizan componentes standalone
- Todos los componentes deben pertenecer a un NgModule
- Mantener una estructura clara favorece la escalabilidad y mantenibilidad
- Usar Angular CLI evita errores de configuración manual