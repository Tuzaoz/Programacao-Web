var num1 = prompt('Digite um Número:')
var num2 = prompt('Digite Outro Número:')
var res = parseInt(num1) + parseInt(num2)

const resultado = document.getElementById('localresult')
function imprime(){
    resultado.innerHTML=(`${num1} + ${num2} = ${res}`)
}
imprime()