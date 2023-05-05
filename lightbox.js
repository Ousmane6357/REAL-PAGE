const imagen = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelectorAll('.imagen-light')
const contenedorLight = document.querySelectorAll('.agregar-imagen')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=> {
        aparecerImagen(imagen.getAttribute('src'))
        


    })
    
})

const aparecerImagen = (imagen) =>{

    imagenLight.src =imagen;
    contenedorLight.classList.toggle
}