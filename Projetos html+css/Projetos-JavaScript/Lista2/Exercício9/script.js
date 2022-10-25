var num = document.getElementById('numero')
function Tabuada(){
    for (let i=1; i<=10; i++){
        var resultado = num.value*i
        const para = document.createElement('p')
        const res = document.createTextNode(`${num.value} x ${i} = ${resultado}`)
        para.appendChild(res)

        const tabuada = document.getElementById("resCamp")
        tabuada.appendChild(para)
        resultado = 0
    }
}

