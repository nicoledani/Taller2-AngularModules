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

El proyecto consume la [PokéAPI](https://pokeapi.co/) para obtener el listado de pokemones.

### 🔗 Endpoint de listado

- `GET https://pokeapi.co/api/v2/pokemon?limit=10`

Este endpoint devuelve un objeto con la forma `PokeApiResponse`, donde cada elemento de `results` contiene el `name` y la `url` del detalle del pokemon:

```json
{
  "count": 1302,
  "next": null,
  "previous": null,
  "results": [
    { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" }
  ]
}
```

### 🖼️ Sprites (imágenes)

- `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png`

Debido a que el endpoint de listado no incluye la imagen, el servicio `PokelistService` extrae el `id` de la `url` de cada pokemon y construye la URL del sprite usando el CDN oficial de PokéAPI.

### ⚙️ Configuración

Los valores de la API están centralizados en `src/app/core/config/pokelist.config.ts`:

- `POKEMON_API_URL`: URL base de la PokéAPI.
- `POKEMON_LIMIT`: cantidad de pokemones solicitados por petición.
- `POKEMON_IMAGE_BASE_URL`: CDN oficial de sprites.

## ⚙️ Generación de Archivos con Angular CLI
A continuación se presentan los comandos más utilizados para generar módulos y componentes.

### 📦 Generar un módulo con archivo de rutas

```ng g m [ruta]/[nombre-modulo] --routing```

#### Ejemplo:

```ng g m modules/pokelist --routing```
```ng g m modules/movielist --routing```

#### Archivos Generados

```
src/app/modules/pokelist
├──pokelist-module.ts
└──pokelist-routing-module.ts

src/app/modules/movielist
├──movielist-module.ts
└──movielist-routing-module.ts
```

### 🧩 Generar un componente (con carpeta propia)

```ng g c [ruta]/[nombre-componente] --standalone=false```

#### Ejemplo:

```ng g c modules/pokelist/components/table-pokelist --standalone=false```

```ng g c modules/movielist/components/cards-movielist --standalone=false```

#### Archivos Generados

```
src/app/modules/pokelist/components/table-pokelist/
├── table-pokelist.component.html
├── table-pokelist.component.scss
├── table-pokelist.component.spec.ts
└── table-pokelist.component.ts

src/app/modules/movielist/components/cards-movielist/
├── cards-movielist.component.html
├── cards-movielist.component.scss
├── cards-movielist.component.spec.ts
└── cards-movielist.component.ts
```

### 📄 Generar un componente sin carpeta (--flat)

```ng g c [ruta]/[nombre-componente] --standalone=false --flat```

#### Ejemplo:

```ng g c modules/pokelist/components/table-pokelist/table-pokelist.component --standalone=false --flat```

```ng g c modules/movielist/components/cards-movielist/cards-movielist.component --standalone=false --flat```

#### Archivos Generados

```
src/app/modules/pokelist/components/table-pokelist/
├──table-pokelist.component.html
├──table-pokelist.component.scss
├──table-pokelist.component.spec.ts
└──table-pokelist.component.ts

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