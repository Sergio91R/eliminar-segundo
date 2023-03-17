
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Sergio'
    },
    {
        id: 3,
        nombre: 'Lina'
    }
];

const salarios =[
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 5000
    }
];

const getEmpleado = (id) => {
    
    return new Promise((resolve,reject)=>{

        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`no existe empleado con id ${ id}`);       
       
});
}

const getSalario = (id) => {
    
    return new Promise((resolve,reject)=>{

        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`no existe empleado con id ${ id}`);       
       
});

}

const id = 1;

  
// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(error => console.log (error));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(error => console.log (error));

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
    .catch(err => console.log(err));