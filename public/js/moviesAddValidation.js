window.onload = function () {
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

    const funcValidate = (obj) => {
        let arr = Object.values(obj)
        if (!arr.includes(false)) {
            btn.disabled = false
            btn.style.backgroundColor = '#198754'
        } else {
            btn.disabled = true
            btn.style.backgroundColor = '#7b9c8d'
        }
    }
    /* 'btn' boton agregar/enviar si los campos estan vacios no me permite enviar el formulario */


    let inputTitulo = $('#title')
    let rating = $('#rating')
    let awards = $('#awards')
    let release= $('#release_date')
    let duracion = $('#length')
    let genre = $('#genre_id')
    let btn = $('#btn-agregar')




    inputTitulo.focus()

    inputTitulo.addEventListener('blur', (e) => {
        if (!inputTitulo.value) {
            inputTitulo.classList.add('is-invalid')
            inputTitulo.classList.remove('is-valid')
            validate.titulo = false
        }else{
            inputTitulo.classList.remove('is-invalid')
            inputTitulo.classList.add('is-valid')
            validate.titulo = true
        }
        /* console.log(inputTitulo); */
    })
    rating.addEventListener('blur', (e) => {
        if (!rating.value) {
            rating.classList.add('is-invalid')
            rating.classList.remove('is-valid')
            validate.rating = false
        }else{
            rating.classList.remove('is-invalid')
            rating.classList.add('is-valid')
            validate.rating = true
        }
        
    })
    awards.addEventListener('blur', (e) => {
        if (!awards.value) {
            awards.classList.add('is-invalid')
            awards.classList.remove('is-valid')
            validate.awards = false
        }else{
            awards.classList.remove('is-invalid')
            awards.classList.add('is-valid')
            validate.awards = true
        }
       
    })
    release.addEventListener('blur', (e) => {
        if (!release.value) {
            release.classList.add('is-invalid')
            release.classList.remove('is-valid')
            validate.release = false
        }else{
            release.classList.remove('is-invalid')
            release.classList.add('is-valid')
            validate.release = true
        }
       
    })
    duracion.addEventListener('blur', (e) => {
        if (!duracion.value) {
            duracion.classList.add('is-invalid')
            duracion.classList.remove('is-valid')
            validate.duracion = false
        }else{
            duracion.classList.remove('is-invalid')
            duracion.classList.add('is-valid')
            validate.duracion = true
        }
       
    })
    genre.addEventListener('blur', (e) => {
        if (!genre.value) {
            genre.classList.add('is-invalid')
            genre.classList.remove('is-valid')
            validate.genre = false
        }else{
            genre.classList.remove('is-invalid')
            genre.classList.add('is-valid')
            validate.genre = true
        }
       
    })


    const validate = {
        titutlo: false,
        rating: false,
        awards: false,
        release: false,
        duracion: false,
        genre: false

    }
    funcValidate(validate)
}