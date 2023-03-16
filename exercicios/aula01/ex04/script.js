function calcular(){
    window.alert('Seja bem vindo(a) ao meu site!')
    let n = Number(window.prompt('Digite um número'))
    let res = window.document.getElementById('resultado')
    let m = num * 2
    let d = num / 2
    res.innerHTML = `<p>O dobro de ${num} é ${m} e a metade é ${d}!`
}