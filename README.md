# Bisuterías con Lina — sitio multipágina con URLs limpias

Sitio estático organizado por carpetas para que cada página tenga una URL limpia, sin extensión `.html`.

## Páginas (rutas)
- `/` → `index.html`: Inicio y presentación de la marca.
- `/coleccion/` → `coleccion/index.html`: catálogo completo con productos, filtros y selección múltiple para preguntar por WhatsApp.
- `/esencia/` → `esencia/index.html`: sección Nuestra esencia.
- `/talleres/` → `talleres/index.html`: sección de talleres.
- `/contacto/` → `contacto/index.html`: contacto y consultas.

## Estructura
- `assets/css/styles.css`: estilos de la marca + estilos de selección y CTAs.
- `assets/js/script.js`: catálogo, filtros, selección múltiple, menú móvil, carrusel de inicio y enlaces de WhatsApp.
- `assets/img/`: imágenes del proyecto (incluye `class/` y el logo `mainicon.jpg`).

## Cómo ejecutarlo
1. Abre la carpeta `bisuterias_con_lina` en VS Code.
2. Ejecuta con **Live Server** (botón "Go Live"). Se abrirá `http://127.0.0.1:5500/` (o el puerto que tengas configurado).
3. Navega por el menú: las rutas se verán como `/coleccion/`, `/esencia/`, etc., sin `.html`.

> **Nota sobre el puerto:** Live Server usa un puerto local (por ejemplo `:5500`). El puerto solo desaparece de la URL al publicar el sitio en un hosting real (Netlify, Vercel, GitHub Pages, etc.) o al servirlo en el puerto 80. Las rutas deben servirse desde la raíz del proyecto (así funciona Live Server).

## Funcionalidad de la colección
- Toca una card para **seleccionarla** (aparece un check). Puedes seleccionar varias.
- La barra inferior muestra cuántas piezas elegiste y permite:
  - **Preguntar por una pieza** o **preguntar por varias** por WhatsApp (se arma el mensaje con los nombres).
  - **Limpiar** la selección.
- Cada card también conserva el enlace rápido "Me interesa esta pieza" para consultar solo ese producto.

## Notas
- Se conservaron los nombres y descripciones del catálogo original; no se añadieron precios.
- El número de WhatsApp configurado en el `script.js` original se mantuvo.
- Las fotografías deben permanecer dentro de `assets/img/` para que las rutas funcionen.
