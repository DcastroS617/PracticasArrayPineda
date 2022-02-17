const Hilera1DOM = document.querySelector(".Hilera1 > label ~ input")
const Hilera2DOM = document.querySelector(".Hilera2 > label ~ input")
const LargoDOM = document.querySelector(".largo > input")
const VocalDOM = document.querySelector(".vocal > input")
const ConsonanteDOM = document.querySelector(".consonante > input")
const AlfasDOM = document.querySelector(".alfa > input")
const VerEventDOM = document.querySelector(".Botones > a ~ a")
const LimpiarEventDOM = document.querySelector(".Botones > a")

const VocalesArray = ['a', 'e', 'i', 'o', 'u']
const NumerosArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let Vocal = 0, Consonante = 0, Largo = 1

const ErroresHileras = (hilera1, hilera2) => {
    if (hilera1 === "" || hilera1 === undefined) {
        throw new Error("Debe introducir los datos de la primera hilera para continuar")
    }
    if (hilera2 === "" || hilera2 === undefined) {
        throw new Error("Debe introducir los datos de la segunda hilera para continuar")
    }
}

const CrearHilera = (hilera) => {
    DetectarVocal(hilera)
    DetectarConsonante(Vocal, hilera)
    DetectarLargo(hilera)
    let alfas = DetectarAlfanumericos(hilera)
    return new Hilera(Largo, Vocal, Consonante, alfas)
}

const DetectarLargo = (hilera) => {
    Largo = 0
    hilera.forEach(letra => {
        Largo = hilera.length
        if (letra === " ") {
            Largo -= 1
        }
    })
}

//se encarga de detectar si la letra es vocal o consonante
const DetectarVocal = (hilera) => {
    Vocal = 0
    hilera = TrimNumero(hilera)
    hilera.forEach(letra => {
        VocalesArray.forEach(vocal => {
            if (letra === vocal && letra !== " ") {
                Vocal++
            }
        })
    })
}

const DetectarConsonante = (cantidad_vocal, hilera) => {
    Consonante = 0
    hilera = TrimNumero(hilera)
    hilera.forEach(letra => {
        if (letra === " ") {
            hilera.length -= 1
        }
        Consonante = Number(hilera.length) - Number(cantidad_vocal)
    })
}

const TrimNumero = (hilera) => {
    NumerosArray.forEach(num => {
        hilera = hilera.filter(letra => letra !== num)
    })
    return hilera
}

const DetectarAlfanumericos = (hilera) => {
    let alfa = ""
    hilera.forEach(letra => {
        NumerosArray.forEach(num => {
            if (letra === num) {
                alfa += letra
            }
        })
    })
    alfa = alfa.split("")
    return alfa.length
}

const ValidarGeneral = (num1, num2) => {
    if (num1 > num2) {
        return "La hilera 1"
    } else if (num1 === num2) {
        return "Las hileras quedan empates"
    } else {
        return "La hilera 2"
    }
}

VerEventDOM.addEventListener("click", () => {
    try {
        ErroresHileras(Hilera1DOM.value, Hilera2DOM.value)
        const splitHilera1 = Hilera1DOM.value.split("")
        const splitHilera2 = Hilera2DOM.value.split("")
        let hilera1 = CrearHilera(splitHilera1)
        let hilera2 = CrearHilera(splitHilera2)
        LargoDOM.value = ValidarGeneral(hilera1.largo, hilera2.largo)
        VocalDOM.value = ValidarGeneral(hilera1.vocal, hilera2.vocal)
        ConsonanteDOM.value = ValidarGeneral(hilera1.consonante, hilera2.consonante)
        AlfasDOM.value = ValidarGeneral(hilera1.alfas, hilera2.alfas)
    } catch (error) {
        alert(error)
    }
})

LimpiarEventDOM.addEventListener("click", () => {
    LargoDOM.value = ''
    VocalDOM.value = ''
    ConsonanteDOM.value = ''
    AlfasDOM.value = ''
    Hilera1DOM.value = ''
    Hilera2DOM.value = ''
})

class Hilera {
    constructor(largo, vocal, consonante, alfas) {
        this.largo = largo
        this.vocal = vocal
        this.consonante = consonante
        this.alfas = alfas
    }
}