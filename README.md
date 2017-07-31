# pinterest

- Se inició el proyecto creando el archivo gulpfile.js en la carpeta pinterest, luego ejecutamos npm init.
- Se agregan las siguientes dependencias de desarrollo: gulp, gulp-concat, gulp-minify-css, gulp-sass, gulp-uglify, gulp-webserver.
- Se agregan las dependencias de producción: jQuery y Materialize (se agregó esta última porque inicialmente pensaba utilizar ese framework, lo cual finalmente no ocurrió)
- Descargamos los archivos necesarios y creamos las carpetas a utilizar, luego se escribe el archivo gulpfile.js
- Al hacer gulp, guardamos las imagenes en al carpeta dist.
- Creamos los archivos index.html, main.scss y main.js para escribir el código.
- Para posicionar el contenido, se utiliza Flexbox y Float (no hay frameworks).
- Se utiliza Sass y JQuery.
- El proyecto posee una vista desktop y una extra-grande.
- Al inicio carga 20 pines y cuando el scroll llega al final de la página se cargan las otras 20.
- Cuando se clickea en cada pin se despliega un modal con los detalles del pin.
- Los detalles del pin y del modal se extraen de un archivo data.js, donde se guardo el contenido de data.json.
