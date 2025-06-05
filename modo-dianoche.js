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

function Unirse(){
    const boton = document.getElementById('miembro');
    boton.addEventListener('click', (event) =>{
        event.target.value++;
        alert("Felicidades eres el miembro numero " + event.target.value);
    })
}

document.addEventListener('DOMContentLoaded', Unirse);