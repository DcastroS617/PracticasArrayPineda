const btnFillArrayDOM = document.querySelector(".llenar > button")
const tamanioDOM = document.querySelector(".tamanio > label ~ input")
const limiteDOM = document.querySelector(".limite > label ~ input")
const removerNumeroParDOM = document.querySelector(".NumeroPar > input")
const removerNumeroMenorDOM = document.querySelector(".NumeroMenor > input")
const removerNumeroMayorDOM = document.querySelector(".NumeroMayor > input")
const verArreglobtnDOM = document.querySelector(".ButtonGroup > button")
const LimpiarbtnDOM = document.querySelector(".ButtonGroup > button ~ button")
const contenidoFinalDOM = document.querySelector(".Content > label ~ textarea")
let arrayFinal = []

/* UTILS */

const GenerarArray = (tamanio, limite) => {
    for (var i = 0; i < tamanio; i++) {
        let random = Math.round(Math.random() * limite)
        arrayFinal.push(random)
    }
    return arrayFinal
}

const LimpiarArray = (array) => {
    while (array.length) {
        array.pop()
    }
}

const FiltrarNumerosPares = (arrayRandom) => {
    const result = arrayRandom.filter(item => item % 2 === 1)
    return result
}

const FiltrarNumerosMayores = (arrayRandom) => {
    const result = arrayRandom.filter(item => item < 50)
    return result
}

const FiltrarNumerosMenores = (arrayRandom) => {
    const result = arrayRandom.filter(item => item > 10)
    return result
}

const inhabilitarCampos = () => {
    tamanioDOM.disabled = true
    limiteDOM.disabled = true
    btnFillArrayDOM.disabled = true
    alert("El arreglo se llenó de forma éxitosa")
}

const habilitarCampos = () => {
    tamanioDOM.disabled = false
    limiteDOM.disabled = false
    btnFillArrayDOM.disabled = false
}

const ControlErrorStrings = (tamanio, limite) => {
    if(!tamanio || !limite){
        throw new Error("Debe introducir todos los datos para continuar...")
    }
    if(isNaN(tamanio) || isNaN(limite)){
        throw new Error("Debe introducir los datos en formato númerico entero para continuar...")
    }
}

/* UTILS */


/* EVENTOS */

const GenerarArrayEvent = () => {
    btnFillArrayDOM.addEventListener("click", () => {
        try{
        ControlErrorStrings(tamanioDOM.value, limiteDOM.value)
        const final = GenerarArray(tamanioDOM.value, limiteDOM.value)
        inhabilitarCampos()
        console.log("Arreglo original",final)
        }catch(err){
            alert(err)
        }
    })
}

const VerArregloEvent = () => {
    verArreglobtnDOM.addEventListener("click", () => {
        if(removerNumeroParDOM.checked){
            arrayFinal = FiltrarNumerosPares(arrayFinal)
        }
        if(removerNumeroMenorDOM.checked){
            arrayFinal = FiltrarNumerosMenores(arrayFinal)
        }
        if(removerNumeroMayorDOM.checked){
            arrayFinal = FiltrarNumerosMayores(arrayFinal)
        }
        contenidoFinalDOM.value = arrayFinal
    })
}

const LimpiarArrayEvent = () => {
    LimpiarbtnDOM.addEventListener("click", () => {
        LimpiarArray(arrayFinal)
        contenidoFinalDOM.value = ''
        tamanioDOM.value = ''
        limiteDOM.value = ''
        removerNumeroMayorDOM.checked = false
        removerNumeroParDOM.checked = false
        removerNumeroMenorDOM.checked = false       
        habilitarCampos()
    })
}

/* EVENTOS */


/* MAIN */

GenerarArrayEvent()
VerArregloEvent()
LimpiarArrayEvent()

/* MAIN */