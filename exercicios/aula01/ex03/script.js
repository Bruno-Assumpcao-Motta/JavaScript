function clicar(){
    let nome = window.prompt('Digite o seu nome')  
    let res = window.document.getElementById('resultado')
    res.innerHTML = `<p>Olá, ${nome}! É um grande prazer te conhecer! \u{1F596}</p>`
}
