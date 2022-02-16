const SalarioHorasDOM = document.getElementById("salario_horas_txt")
const DiasTrabajadosDOM = document.getElementById("dias_trabajados_txt")
const PorcentajeDeduccionDOM = document.getElementById("porcentaje_deduccion_txt")
const SalarioBrutoDOM = document.getElementById('salario_bruto_txt')
const DeduccionesDOM = document.getElementById('deducciones_txt')
const SalarioNetoDOM = document.getElementById('salario_neto_txt')
const CalcularbtnDOM = document.getElementById('calcular_btn')
const LimpiarbtnDOM = document.getElementById('limpiar_btn')

const SalarioBrutoCalculo = (horas, dias) => {
    const resultado = parseFloat(horas) * parseFloat(dias)
    return resultado
}

const DeduccionesCalculo = (porcentaje, salario, dias) => {
    const resultado = (parseFloat(porcentaje) * parseFloat(salario) * parseFloat(dias))
    return resultado
}

const SalarioNetoCalculo = (salario_bruto, deducciones) => {
    const resultado = salario_bruto - deducciones
    return resultado
}

const PorcentajeParse = (numero) => {
    const resultado = numero / 100
    return resultado
}

const CalculoEvent = () => {  
    CalcularbtnDOM.addEventListener('click', () => {
        let porcentaje = PorcentajeParse(PorcentajeDeduccionDOM.value)
        let salario_bruto = SalarioBrutoCalculo(SalarioHorasDOM.value, DiasTrabajadosDOM.value) 
        let deducciones = DeduccionesCalculo(porcentaje, SalarioHorasDOM.value, DiasTrabajadosDOM.value);
        let salario_neto = SalarioNetoCalculo(salario_bruto, deducciones)
        SalarioBrutoDOM.value = salario_bruto
        DeduccionesDOM.value = deducciones
        SalarioNetoDOM.value = salario_neto
    })
}

const LimpiarEvent = () => {
    LimpiarbtnDOM.addEventListener("click", () => {
        PorcentajeDeduccionDOM.value = ''
        SalarioHorasDOM.value = ''
        DiasTrabajadosDOM.value = ''
        SalarioBrutoDOM.value = ''
        DeduccionesDOM.value = ''
        SalarioNetoDOM.value = ''
    })
}

/* MAIN CALLS */
CalculoEvent()
LimpiarEvent()