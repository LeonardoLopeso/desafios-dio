// #### Resposta do desafio 01
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface IEmployee {
    code: number,
    name: string
}

const employee: IEmployee = {
    code: 10,
    name: 'Leonardo'
}

console.log('Seu nome é ' + employee.name + ' e seu código é ' + employee.code);