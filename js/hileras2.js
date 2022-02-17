const HileraDOM = document.querySelector(".evento > label ~ input")
const EjecutarEventDOM = document.querySelector(".evento > label ~ input ~ a")
const VocalDOM = document.querySelector(".vocal > label ~ input")
const ConsonanteDOM = document.querySelector(".consonante > label ~ input")
const AlrevesDOM = document.querySelector(".alreves > label ~ input")
const PrimeroDOM = document.querySelector(".primero > input")
const SegundoDOM = document.querySelector(".segundo > input")
let alreves = "", alrevesFinal = [], vocalCount = 0, consonanteCount = 0
const vocales = ['a', 'e', 'i', 'o', 'u'], numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const ErroresHilera = (cadena) => {
    if (cadena === undefined || cadena === "") {
        throw new Error("Debe introducir una cadena de caracteres para poder continuar")
    }
    cadena = cadena.split("")
    cadena.forEach(letra => {
        numeros.forEach(num => {
            if (letra === num) {
                throw new Error("No se permiten caracteres numericos")
            }
        })
    })
}

const LimpiarAlreves = (alreves) => {
    while (alreves.length) {
        alreves.pop()
    }
}

const Alreves = (cadena) => {
    alreves = ""
    LimpiarAlreves(alrevesFinal)
    cadena = cadena.split("")
    for (let i = 0; i < cadena.length; i++) {
        alreves = (cadena.length - i) - 1
        alrevesFinal.push(cadena[alreves])
    }
    console.log(cadena)
}

const Vocales = (cadena) => {
    vocalCount = 0
    cadena = cadena.split("")
    cadena.forEach(letra => {
        vocales.forEach(vocal => {
            if (letra === vocal) {
                vocalCount++
            }
        })
    });
}

const Consonantes = (cadena) => {
    consonanteCount = 0
    cadena = cadena.split("")
    cadena.forEach(letra => {
        if (letra === " ") {
            cadena.length -= 1
        }
    })

    consonanteCount = cadena.length - vocalCount
}

const PrimerHilera = (cadena) => {
    cadena = cadena.split("")
    let primera = ""
    let dividir = Math.round(cadena.length / 2)
    for (let i = 0; i < cadena.length - dividir; i++) {
        primera += cadena[i]
    }
    return primera
}

const SegundaHilera = (cadena) => {
    cadena = cadena.split("")
    let segunda = ""
    let dividir = Math.round(cadena.length / 2)
    for (let i = dividir - 1; i < cadena.length; i++) {
        segunda += cadena[i]
    }
    return segunda
}

const ProcesarHilera = (cadena) => {
    try {
        ErroresHilera(cadena)
        Alreves(cadena)
        Vocales(cadena)
        Consonantes(cadena)
        const primerParteHilera = PrimerHilera(cadena)
        const segundaParteHilera = SegundaHilera(cadena)
        VocalDOM.value = vocalCount
        ConsonanteDOM.value = consonanteCount
        AlrevesDOM.value = alrevesFinal.join("")
        PrimeroDOM.value = primerParteHilera
        SegundoDOM.value = segundaParteHilera
    } catch (error) {
        alert(error)
    }
}

const Evento = () => {
    EjecutarEventDOM.addEventListener("click", () => {
        ProcesarHilera(HileraDOM.value)
    })
}

Evento()