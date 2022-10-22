let resultado = document.getElementById("resultado")

function randomNumber() { 
    return Math.round(Math.random() * (3 - 1) + 1)
    // 1 = Pedra
    // 2 = Papel
    // 3 = Tesoura
}

let escolhaJogador = ""

function pedra () {
    escolhaJogador = "Pedra"
    let escolhaMaquina = randomNumber()
    if (escolhaJogador == "Pedra" && escolhaMaquina == 1) {
        resultado.innerHTML = "<strong>Empate</strong>, escolhas iguais."
    } else if (escolhaJogador == "Pedra" && escolhaMaquina == 2) {
        resultado.innerHTML = "<strong>Derrota</strong>, você selecionou pedra contra papel."
    } else {
        resultado.innerHTML = "<strong>Vitória</strong>, você selecionou pedra contra tesoura."
    }
}

function papel () {
    escolhaJogador = "Papel"
    let escolhaMaquina = randomNumber()
    if (escolhaJogador == "Papel" && escolhaMaquina == 2) {
        resultado.innerHTML = "<strong>Empate</strong>, escolhas iguais."
    } else if (escolhaJogador == "Papel" && escolhaMaquina == 1) {
        resultado.innerHTML = "<strong>Vitória</strong>, você selecionou papel contra pedra."
    } else {
        resultado.innerHTML = "<strong>Derrota</strong>, você selecionou papel contra tesoura."
    }
}

function tesoura () {
    escolhaJogador = "Tesoura"
    let escolhaMaquina = randomNumber()
    if (escolhaJogador == "Tesoura" && escolhaMaquina == 3) {
        resultado.innerHTML = "<strong>Empate</strong>, escolhas iguais."
    } else if (escolhaJogador == "Tesoura" && escolhaMaquina == 1) {
        resultado.innerHTML = "<strong>Derrota</strong>, você selecionou tesoura contra pedra."
    } else {
        resultado.innerHTML = "<strong>Vitória</strong>, você selecionou tesoura contra papel."
    }
}



