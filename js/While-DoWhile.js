const tipo_cliente_DOM = document.querySelector('.Cliente > label ~ select')
const sub_total_DOM = document.querySelector('.Subtotal > label ~ input')
const porcentaje_descuento_DOM = document.querySelector('.Porcentaje_descuento > label ~ input')
const monto_descuento_DOM = document.querySelector('.Monto_descuento > label ~ input')
const total_DOM = document.querySelector('.Total > label ~ input')
const calcular_Evento_DOM = document.querySelector('.Botones > a ~ a')
const limpiar_Evento_DOM = document.querySelector('.Botones > a')
const PorcentajeDescuento = (numero) => {
    return numero / 100
}

const MontoDescuento = (sub_total, descuento) => {
    return sub_total * descuento
}

const TotalFinal = (sub_total, monto_descuento) => {
    return Number(sub_total) - Number(monto_descuento)
}

const Limpiar = () => {
    sub_total_DOM.value = ''
    porcentaje_descuento_DOM.value = ''
    monto_descuento_DOM.value = ''
    total_DOM.value = ''
}

const StringError = (tipo_cliente, sub_total) => {
    if (tipo_cliente === '' || tipo_cliente === undefined || tipo_cliente.startsWith("Escoja")) {
        throw new Error("Debe introducir el tipo de cliente para realizar el calculo final")
    }
    if (sub_total === '' || sub_total === undefined) {
        throw new Error("Debe introducir el sub total para realizar el calculo final")
    }
    if (isNaN(sub_total)) {
        throw new Error("El subtotal deben ser numeros únicamente")
    }
}

calcular_Evento_DOM.addEventListener('click', () => {
    try {
        let selected = $(".Cliente > label ~ select").find(":selected").val()
        StringError(selected, sub_total_DOM.value)
        porcentaje_descuento_DOM.value = selected + "%"
        selected = PorcentajeDescuento(selected)
        monto_descuento_DOM.value = MontoDescuento(sub_total_DOM.value, selected)
        total_DOM.value = TotalFinal(sub_total_DOM.value, monto_descuento_DOM.value)
    } catch (error) {
        alert(error)
        return
    }
})

limpiar_Evento_DOM.addEventListener('click', ()=> {
    Limpiar()
})
//console.log(tipo_cliente_DOM, tipo_cliente_Event)