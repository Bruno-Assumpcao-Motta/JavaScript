function somar(){
    n1 = Number(window.prompt('Digite um número'))
    n2 = Number(window.prompt('Digite outro número'))
    let res = window.document.getElementById('resultado')
    let soma = n1 + n2
    res.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a<strong>${soma}!</strong>`
    
}