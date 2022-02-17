const departamentos = []
const empleados = []

const CodigoDeptDOM = document.querySelector('.cod > label ~ input')
const NameDeptDOM = document.querySelector('.nomD > label ~ input')
const BudgetDeptDOM = document.querySelector('.pres > label ~ input')
const DNIEmpDOM = document.querySelector('.dni > label ~ input')
const NameEmpDOM = document.querySelector('.nomE > label ~ input')
const ApellidoEmpDOM = document.querySelector('.ape > label ~ input')
const DepartmentEmpDOM = document.querySelector('.dept > label ~ input')
const AddDeptEventDOM = document.querySelector('.addDept > a')
const AddEmpEventDOM = document.querySelector('.addEmp > a')

class Empleado {
    constructor(dni, name, lastname, department) {
        this.dni = dni
        this.name = name
        this.lastname = lastname
        this.department = department
    }
}

class Departamento {
    constructor(codigo, name, budget) {
        this.codigo = codigo
        this.name = name
        this.budget = budget
    }
}

const CrearDepartamento = (departamento) => {
    ErrorIdRepetidaDept(departamento.codigo)
    departamentos.push(departamento)
}

const CrearEmpleado = (empleado) => {
    ErrorNoDept()
    ErrorIdRepetidaEmp(empleado.dni)
    ErrorDeptInvalid(empleado.department)
    empleados.push(empleado)
}

const ErrorNoDept = () => {
    if (departamentos.length === 0) {
        throw new Error("Debe introducir un departamento")
    }
}

const ErrorDeptInvalid = (id) => {
    departamentos.forEach(dept => {
        if(dept.codigo !== id){
            throw new Error("El departamento no existe")
        }
    })
}

const ErrorIdRepetidaEmp = (id) => {
    empleados.forEach(emp => {
        if (emp.dni === id) {
            throw new Error("la identificacion ya fue utilizada, debe escoger otra")
        }
    })
}

const ErrorIdRepetidaDept = (id) => {
    departamentos.forEach(dept => {
        if (dept.codigo === id) {
            throw new Error("la identificacion ya fue utilizada, debe escoger otra")
        }
    })
}

const ErrorDeptVacio = (dept) => {
    if (dept.codigo === '' || dept.name === '' || dept.budget === '') {
        throw new Error("Debe introducir todos los datos para añadir un nuevo empleado")
    }
}

const ErrorEmpVacio = (emp) => {
    if (emp.dni === "" || emp.name === "" || emp.lastname === "" || emp.department === "") {
        throw new Error("Debe introducir todos los datos para añadir un nuevo departamento")
    }
}

const LlenarTablaDepartamento = () => {
    const tablahidden = document.querySelector('#DeptTable')
    tablahidden.hidden = false
    $("#DeptTable tbody").empty()
    let fila = ""
    departamentos.forEach(dept => {
        fila = `
        <tr>
        <td>${dept.codigo}</td>
        <td>${dept.name}</td>
        <td>${dept.budget}</td>
        </tr>
        `
        $("#DeptTable > tbody").append(fila)
    })
}

const LlenarTablaEmpleado = () => {
    const tablahidden = document.querySelector('#EmpTable')
    tablahidden.hidden = false
    $("#EmpTable tbody").empty()
    let fila = ""
    empleados.forEach(emp => {
        fila = `
            <tr>
            <td> ${emp.dni} </td>
            <td> ${emp.name} </td>
            <td> ${emp.lastname} </td>
            <td> ${emp.department} </td>
        `
        $("#EmpTable > tbody").append(fila)
    })
}

AddDeptEventDOM.addEventListener("click", () => {
    try {
        var dept = new Departamento(CodigoDeptDOM.value, NameDeptDOM.value, BudgetDeptDOM.value)
        ErrorDeptVacio(dept)
        CrearDepartamento(dept)
        LlenarTablaDepartamento()
    } catch (error) {
        alert(error)
    }
})

AddEmpEventDOM.addEventListener("click", () => {
    try {
        var emp = new Empleado(DNIEmpDOM.value, NameEmpDOM.value, ApellidoEmpDOM.value, DepartmentEmpDOM.value)
        ErrorEmpVacio(emp)
        CrearEmpleado(emp)
        LlenarTablaEmpleado()
    } catch (error) {
        alert(error)
    }
})




