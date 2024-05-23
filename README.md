#BookAppTechTest

Contexto

Usa el archivo books.json para obtener los datos de los libros. Puedes añadir más libros si lo deseas, siempre y cuando siga la misma estructura.

Requisitos
Funcionalidad
[x] Visualización de Libros Disponibles:
[x]La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

[]Creación de Lista de Lectura:
[]El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles.
[]En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no.
[]También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

[]Filtrado de Libros por Género:
[x]Los usuarios deben poder filtrar la lista de libros disponibles por género
[] Contador con el número de libros disponibles
[] Número de libros en la lista de lectura
[] Número de libros disponibles en el género seleccionado.

[]Sincronización de Estado:
[]Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

[]Persistencia de Datos:
[]La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

[]Sincronización entre pestañas:
[]Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

[]Despliegue:
[]La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

[]Test:
[]La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.

Consejos sobre el código
Estructura del código: El código debe estar bien organizado y fácil de leer.

Semántica HTML: El HTML debe ser semántico y accesible.

Pensando en equipo: Prepara tu proyecto pensando que cualquier persona de tu equipo puede tener que trabajar en él en el futuro. (scripts en el package.json, mínima documentación en el README, comentarios en el código si es necesario, etc)

Formatea tu código: Asegúrate de que tu código está formateado de forma consistente. Puedes usar Prettier o cualquier otra herramienta que te guste.

Preparado para producción: Asegúrate de que tu aplicación está lista para producción. Minimiza el código, optimiza las imágenes, etc.

Desafíos adicionales
¿Quieres ir más allá? Estos son algunos desafíos adicionales que puedes intentar:

[]Implementar una funcionalidad de búsqueda en la lista de libros disponibles.
[]Añade un nuevo filtro para filtrar los libros por número de páginas.
[]Permitir la reorganización de los libros en la lista de lectura por prioridad.
[]Haz que tu diseño sea responsive.
