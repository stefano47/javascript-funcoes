// "this" pode variar

/**
 * 
 * A função nesse contexto só executa no browser
 * 
 * function f1(){
    console.log(this === window)
}

f1()
 */

// global equivale ao objeto window do navegador
function f1(){
    console.log(this === global)
}

f1() // true

// o this nesse contexto não pode variar
const f2 = () => console.log(this === global)

f2() // false