
var botao = document.getElementById('submit')
    botao.onclick = function(){
        var form = document.getElementById('form')
        var todosInputs = form.elements
        
    for (let i = 0; i < todosInputs.length; i++) {
        console.log(todosInputs[i])

        if (todosInputs[i].value == '') {
            document.getElementById('aviso').innerHTML = "Preencha todos os campos"
        }
        
    }
    

    
}