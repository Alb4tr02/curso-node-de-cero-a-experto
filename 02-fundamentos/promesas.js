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

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(empleado => empleado.id === id)
        empleado ? resolve(empleado) : reject(`empleado con id ${id} no existe`)
    });
}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find(empleado => empleado.id === id)?.salario
        salario ? resolve(salario) : reject(`empleado con id ${id} no existe :c`)
    });
}

const id = 3

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err))

let nombre;
getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then( salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => console.log(err));

const getInfoUsuario = async (id) => {
    
    try {
        const nombre = await getEmpleado(id);
        const salario = await getSalario(id);
        
        return `El empleado ${nombre} tiene un salario de ${salario}`
    } catch (error) {
        throw error;
    }
}

getInfoUsuario(id)
    .then( msg => console.log(msg))
    .catch( err => console.log(err))