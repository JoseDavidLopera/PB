let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function seleccionMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionMascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionAtaque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascotaJugador")

    if(inputHipodoge.checked){

        spanMascotaJugador.innerHTML="Hipodoge"
    }

    else if(inputCapipepo.checked){

        spanMascotaJugador.innerHTML="Capipepo"
    }

    else if(inputRatigueya.checked){

        spanMascotaJugador.innerHTML="Ratigueya"
    }

    else{
        alert("Selecciona una mascota")
    }

    seleccionMascotaEnemigo()
}

function seleccionMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

    if(mascotaAleatorio == 1){ 
        //Hipodoge
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }

    else if(mascotaAleatorio == 2){ 
        //Capipepo
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }

    else if(mascotaAleatorio == 3){ 
        //Ratigueya
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1)+min)
}


//ATAQUES

 

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"

    }

    else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }

    else if(ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", la mascota de tu enemigo ataco con " + ataqueEnemigo + " " + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("botonFuego")
    botonFuego.disabled = true                      // que funcion debo llamar cada vez que presionen el boton fuego

    let botonAgua = document.getElementById("botonAgua")
    botonAgua.disabled = true 

    let botonTierra = document.getElementById("botonTierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"

}

function combate(){
    //COMBATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

    let spanVidasJugador = document.getElementById("vidasJugador")
    let spanVidasEnemigo = document.getElementById("vidasEnemigo")

    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("empate")
        
    }
    
    else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){ 
        crearMensaje("ganaste")
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    }

    else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("ganaste")
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    }
    else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("ganaste")
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    }

    else{
        crearMensaje("perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
        
    }

    revisarVidas()

}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! GANASTE!!!")
    }
    else if(vidasJugador == 0){
        crearMensajeFinal("PERDISTE :(")
    }

}

function reiniciarJuego(){
    location.reload()

}

function iniciarJuego(){ 

    let sectionSeleccionarAtaque = document.getElementById("seleccionAtaque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("botonMascota")
    botonMascotaJugador.addEventListener("click", seleccionMascotaJugador)  // que funcion debo llamar cada vez que presionen el boton mascota 

    let botonFuego = document.getElementById("botonFuego")
    botonFuego.addEventListener("click", ataqueFuego )                     // que funcion debo llamar cada vez que presionen el boton fuego

    let botonAgua = document.getElementById("botonAgua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonTierra = document.getElementById("botonTierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("botonReiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

}



window.addEventListener("load", iniciarJuego)