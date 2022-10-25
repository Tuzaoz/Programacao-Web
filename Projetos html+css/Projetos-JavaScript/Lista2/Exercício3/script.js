var num1 = prompt('Digite um Número:')
var num2 = prompt('Digite Outro Número:')

const resultado = document.getElementById('localresult')
function imprime(){
    if(num1 > num2){
        resultado.innerHTML=(`${num1} é maior que ${num2}`)   
    }
    if(num2 > num1){
        resultado.innerHTML=(`${num2} é maior que ${num1}`)
    }
    else{tu
        resultado.innerHTML=(`${num2} é igual a ${num1}`)
    }
}
imprime()