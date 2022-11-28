window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
 
console.log('archivos vinculados exitosamente')

let $ = (e) => document.querySelector(e)


let inputTitulo = $('#title')
let rating = $('#rating')
let awards = $('#awards')
let release_date = $('#release_date')
let duracion = $('#length')
let genre_id = $('#genre_id')
let btn = $('#btn-agregar')




inputTitulo.focus()


const validate = {
    titutlo : false,
    rating : false,
    release : false,
    duracion: false,
    genre : false

}
}