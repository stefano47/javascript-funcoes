// criar função de forma literal
function fun1(){

}

// armazenar função em uma várivel
const fun2 = function(){

}

// armazenar função em um array
const array = [function(a, b){ return a + b }, fun1, fun2]

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opa' }

// passar função como parametro
function run(fun){
    fun()
}

