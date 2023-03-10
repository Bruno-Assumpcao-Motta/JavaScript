let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 80.5,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
