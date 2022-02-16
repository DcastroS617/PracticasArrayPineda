const Hilera_1_DOM = document.querySelector(".Hilera1 > label ~ input")
const Hilera_2_DOM = document.querySelector(".Hilera2 > label ~ input")
const Ver_Event_DOM = document.querySelector(".Botones > a ~ a")
const VocalesArray = ['a', 'e', 'i', 'o', 'u']
const NumerosArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let Vocal = 0, Consonante = 0, Largo = 1

const Errores_Hileras = (hilera_1, hilera_2) => {
    if (hilera_1 === "" || hilera_1 === undefined) {
        throw new Error("Debe introducir los datos de la primera hilera para continuar")
    }
    if (hilera_2 === "" || hilera_2 === undefined) {
        throw new Error("Debe introducir los datos de la segunda hilera para continuar")
    }
}

const Crear_Hilera = (hilera) => {
    Detectar_Vocal(hilera)
    Detectar_Consonante(Vocal, hilera)
    Detectar_Largo(hilera)
    return new Hilera(Largo, Vocal, Consonante)
}

const Detectar_Largo = (hilera) => {
    Largo = 0
    hilera.forEach(letra => {
        Largo = hilera.length
        if (letra === " ") {
            Largo -= 1
        }
    })
}

//se encarga de detectar si la letra es vocal o consonante
const Detectar_Vocal = (hilera) => {
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

const Detectar_Consonante = (cantidad_vocal, hilera) => {
    Consonante = 0
    hilera = TrimNumero(hilera)
    hilera.forEach(letra => {
        if (letra === " ") {
            hilera.length -= 1
        }
        Consonante = Number(hilera.length) - Number(cantidad_vocal)
    })
}

const Validar_hileras = (hilera_1, hilera_2) => {
    console.log(hilera_1)
    console.log(hilera_2)
    if (hilera_1.largo > hilera_2.largo) {
        console.log("La hilera 1 es mas larga")
    } else if (hilera_1.largo === hilera_2.largo) {
        console.log("Las hileras quedan empates")
    } else {
        console.log("La hilera 2 es mas larga")
    }
}

const TrimNumero = (hilera) => {
    NumerosArray.forEach(num => {
        hilera = hilera.filter(letra => letra !== num)
    })
    return hilera
}

Ver_Event_DOM.addEventListener("click", () => {

    try {
        Errores_Hileras(Hilera_1_DOM.value, Hilera_2_DOM.value)
        const split_Hilera_1 = Hilera_1_DOM.value.split("")
        const split_Hilera_2 = Hilera_2_DOM.value.split("")
        let hilera_1 = Crear_Hilera(split_Hilera_1)
        let hilera_2 = Crear_Hilera(split_Hilera_2)
        //debe mostrar la palabra hilera 1 e hilera 2 para la ganadora
        //y no la hilera como tal.
        Validar_hileras(hilera_1, hilera_2)
    } catch (error) {
        alert(error)
    }

})

class Hilera {
    constructor(largo, vocal, consonante) {
        this.largo = largo
        this.vocal = vocal
        this.consonante = consonante
    }
}