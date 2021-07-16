const empleados = [
    {
        id: 1,
        nombre: 'nata 1'
    },
    {
        id: 2,
        nombre: 'nata 2'
    },
    {
        id: 3,
        nombre: 'nata 3'
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(empleado => empleado.id === id)
    return empleado ? callback(null, empleado): callback(`empleado con id ${id} no existe`)
}

const getSalario = (id, callback) => {

    const salario = salarios.find(empleado => empleado.id === id)?.salario
    return salario ? callback(null, salario): callback(`empleado con id ${id} no existe`)
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        console.log('Error', err);
        return
    }
    console.log(empleado);
});

getSalario(1, (err, salario) => {
    if (err) {
        console.log('Error', err);
        return
    }
    console.log(salario);
});