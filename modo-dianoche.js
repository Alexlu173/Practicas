function DiaNoche(){
    const boton = document.getElementById('dianoche');
    boton.addEventListener('click' , () =>{
        document.body.classList.toggle('modo-dia')
        if(document.body.classList.contains('modo-dia')){
            boton.textContent = 'Modo noche'
        }
        else{
            boton.textContent = 'Modo Dia';
        }
    })
}

document.addEventListener('DOMContentLoaded', DiaNoche);