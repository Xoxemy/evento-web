/* Herramienta para autmatizar tareas,  para automatizar funciones*/

/* function tarea( callback ) {
    console.log('Mi primera tarea');

    callback();
}

exports.tarea = tarea;
 */

/* Para correr la tarea se ejecuta con  'npx glup [nombre de la tarea] (se llama con el lado izquierdo export....)' */

const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");


function css(done) {

    src("src/scss/**/*.scss") //1. Identidicar todos los archivos dentro de la carpteta de scss que acaben con la extension.scss
        .pipe(plumber())
        .pipe(sass()) //2. Compilar el codigo
        .pipe(dest("build/css")); //3. Almacenar en el disco duro

    done(); //Callback que avisa a gulp cuando llegamos al final de la ejecucion de la funcion
}

function dev(done) {
    watch("src/scss/**/*.scss", css) //Cuando cambie el archivo de la ruta indicada, manda a llamar a css (la funcion de arriba)


    done()
}

exports.css = css;
exports.dev = dev;