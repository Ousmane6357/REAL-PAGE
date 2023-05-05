const casa = document.querySelector('.casa');
const menu = document.querySelector('.menu-navegacion')

/*console.log(menu)
console.log(casa)*/


casa.addEventListener('click', ()=> {
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
     && e.target != menu && e.target !=casa){
        menu.classList.toggle("spread")
    }
})





