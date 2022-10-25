var num = document.getElementById('num')
document.getElementById('enviar').onclick = () => {
    var absol = Math.abs(num.value)
    document.getElementById('absol').innerHTML = `Absoluto: ${absol}`
    var int = Math.trunc(num.value)
    document.getElementById('parteinteira').innerHTML = `Parte inteira: ${int}`
    var roun = Math.round(num.value)
    document.getElementById('inteiroprox').innerHTML = `Inteiro mais Próximo: ${roun}`
    var cubic = Math.cbrt(num.value)
    document.getElementById('raizCubica').innerHTML = `Raiz Cúbica ${cubic}`
    var square = Math.sqrt(num.value)
    document.getElementById('raizQuadrada').innerHTML = `Raiz Quadrada ${square}`
}
