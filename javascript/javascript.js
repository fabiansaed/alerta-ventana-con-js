//Guardo en una variable el título actual de mi página index.html
let tituloActual = document.title

//Esuchamos el evento 'blur' de la ventana
window.addEventListener('blur', () =>{
    tituloActual = document.title
    //Cambiamos el título de la página
    document.title = "🚀 NO TE VAYAS 🚀"
})

//Escuchamos el evento 'focus' de la ventana
window.addEventListener('focus', () =>{
    //Regresamos al título original
    document.title = tituloActual
})