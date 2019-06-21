// funções arrow #01

let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está ímplicito

console.log(dobro(3))

let ola = () => 'Olá'
console.log(ola())