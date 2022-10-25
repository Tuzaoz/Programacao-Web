var nome = document.getElementById('nome')
var nota1 = document.getElementById('nota1')
var nota2 = document.getElementById('nota2')
function geraNota(){
    let media = parseInt(nota1.value)+parseInt(nota2.value)
    media = media/2
    if(media >= 7){
        const para = document.createElement("p")
        const resTXT = document.createTextNode(`O Aluno ${nome.value} está aprovado com média ${media}`)
        para.appendChild(resTXT)

        const localOutput = document.getElementById('output')
        localOutput.appendChild(para)
    }
    else{
        const para = document.createElement("p")
        const resTXT = document.createTextNode(`O Aluno ${nome.value} está reprovado com média ${media}`)
        para.appendChild(resTXT)

        const localOutput = document.getElementById('output')
        localOutput.appendChild(para)
    }
}
document.getElementById("calcNota").onclick = function(){
    geraNota()
}
