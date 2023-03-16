function contador(){
    var cont = window.document.getElementById('cont')
    var res = window.document.getElementById('resultado')
    cont.addEventListener('click', clicar)
    
    cont.innerHTML = `O contador está com ${cont} cliques.`
}