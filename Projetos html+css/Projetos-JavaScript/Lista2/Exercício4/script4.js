function gerarSeq(){
   var i = Math.floor(Math.random()*10)
   console.log(i)
   var stop =i+10
   for (;i <= stop; i++){
    const para = document.createElement('p')
    const res = document.createTextNode(i)
    para.appendChild(res)

    const tabuada = document.getElementById("campGerador")
    tabuada.appendChild(para)
   }

}
