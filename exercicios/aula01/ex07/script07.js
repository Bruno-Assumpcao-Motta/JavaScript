function calcular(){
    let num = Number(window.prompt('Digite um número: '))
    let res = window.document.getElementById('resultado')
    res.innerHTML = `<br> O número a ser analisado aqui será o ${num}<br><br>
    <div id="linha-horizontal"></div <br><br>
    A sua parte inteira é ${num} <br><br>
    O seu valor absoluto é ${num} <br><br>
    O valor inteiro mais próximo é ${num} <br><br>
    A sua raiz quadrada é Math.sqrt(${num}) <br><br>
    A sua raiz cúbica é Math.cbrt(${num}) <br><br>
    O valor de (${num}*2) é ${num}
    ` 
}