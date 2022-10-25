var nasc = prompt('Digite seu ano de nascimento:')
var anoAtual= new Date().getFullYear()
var idade = anoAtual - parseInt(nasc) 
alert(`Sua idade é ${idade}`)
