var nomesCadastrados = []
var timeA = []
var timeB = []


function cadastrarNome(nome) {
    var nome = document.getElementById("nomes").value;

    nomesCadastrados.push(nome);

    if (nome.length > 0) {
        /*Cadastrar Apenas se o User Digitar algo */
        document.getElementById('nomes').value = "";
        document.getElementById('resultado').value += nome + " - ";
        console.log(nome);
        console.log(nomesCadastrados)
        nomesCadastrados = nomesCadastrados.sort();
        console.log(nomesCadastrados)
    }
}


function sortear() {

    // Função para randomizar array
    function shuffleArray(nomesCadastrados) {
        // Loop em todos os elementos
        for (let i = nomesCadastrados.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [nomesCadastrados[i], nomesCadastrados[j]] = [nomesCadastrados[j], nomesCadastrados[i]];
        }
        // Retornando array com aleatoriedade
        return nomesCadastrados;
    }
    var arrA = [1, 2, 3, 4, 5];
    console.log(shuffleArray(nomesCadastrados));


}


function formarTimes(nomesCadastrados) {
    if (nomesCadastrados.length % 2 === 0) {
        /* Tamanho da Lista é Par*/
        for (i = 0; i < nomesCadastrados.length / 2; i++) {
            timeA.push(nomesCadastrados[i] + ' - ');
            document.getElementById('timeA').value += timeA[i];
        }
        for (j = 0; j < nomesCadastrados.length / 2; j++) {
            timeB.push(nomesCadastrados[(nomesCadastrados.length / 2) + j] + ' - ')
            document.getElementById("timeB").value += timeB[j];
        }
        console.log('policia: ' + timeA);
        console.log('terrorista: ' + timeB);
    }


    else {
        for (i = 0; i < (Math.trunc(nomesCadastrados.length / 2) + 1); i++) {
            timeA.push(nomesCadastrados[i] + ' - ')
            document.getElementById('timeB').value += timeA[i];
        }
        for (j = 0; j < ((nomesCadastrados.length / 2) - 1); j++) {
            timeB.push(nomesCadastrados[(Math.trunc(nomesCadastrados.length / 2) + 1) + j] + ' - ');
            document.getElementById("timeA").value += timeB[j];

        }
        console.log('policia: ' + timeA);
        console.log('terrorista: ' + timeB);
    }
}


