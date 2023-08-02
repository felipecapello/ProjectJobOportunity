vagas = []
vaga = {}
candidato = {}

function listarVaga(){

    // transformar o conteudo de vagas em um variavel de string para ser informada de forma mais facil
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + " -\n " + vaga.nome + "Quantidade de candidatos: " + vaga.canditato.lenght
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function cadastrarVaga(){
    
    vagaNome = prompt("Digite o nome da vaga")
    vagaDescricao = prompt("Digite a descrição da vaga") 
    vagaDataLimite = prompt("Digite a data limite da vaga")
    vagaCandidato

    const confirmacao = confirm(
        "Deseja confirmar essas informações: \n" +
        "Nome: " + vaga.nome + "\n" +
        "Descrição: " + vaga.descricao + "\n" +
        "Data Limite: " + vaga.dataLimite + "\n"   
    )

    if(confirmacao) {
        const vaga = {v}
    }

}

function cadastrarCandidato(){
    candidato.nome = prompt("Digite o nome do candidato")
    candidato.indiceVaga = prompt("Digite o indice da vaga desejada")
    for(i=0; i<vagas.lenght; i++){
        vaga.candidato[i].push(candidato)
        alert(vaga.candidato[i])
    }
}

function visualizarVaga(){

    indice = prompt("Digite o indice da vaga que deseja exibir: ")
    const vagaCandidato = vagas[indice]


    
                indice + '\n' +
                vaga.nome + "\n" +
                vaga.descricao + "\n" +
                vaga.dataLimite + "\n" +
                vaga.candidato + "\n" +
                candidato.nome 
        }



do {
    choice = prompt("Digite a opção que deseja: \n 1 - Listar vagas disponíveis \n 2 - Criar uma nova vaga \n 3 - Visualizar uma vaga \n 4 - Inscrever um candidado em uma vaga \n 5 - Excluir uma vaga \n 6 - Sair ") 

    switch(choice){
        

        case "1":
        listarVaga();  
        break
        case "2":
        cadastrarVaga();
        break
        case "3":
        visualizarVaga();  
        break  
        case "4":
        cadastrarCandidato();
        break
        case "5":
        case "6":
            alert("Saindo do sistema")


    }

    
} while (choice !== "6");