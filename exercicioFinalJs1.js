const vagas = []

function listarVaga(){

    // transformar o conteudo de vagas em um variavel de string para ser informada de forma mais facil
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + " -  "
        textoFinal += vaga.vagaNome  + ", "
        textoFinal += vaga.vagaCandidato.length + "\n"
        return textoFinal
        
    }, "")

    alert(vagasEmTexto)
}



function cadastrarVaga(){
    
    vagaNome = prompt("Digite o nome da vaga")
    vagaDescricao = prompt("Digite a descrição da vaga") 
    vagaDataLimite = prompt("Digite a data limite da vaga")

    const confirmacao = confirm(
        "Deseja confirmar essas informações: \n" +
        "Nome: " + vagaNome + "\n" +
        "Descrição: " + vagaDescricao + "\n" +
        "Data Limite: " + vagaDataLimite + "\n"   
    )

    if(confirmacao) {
        const cadastrarVaga = {vagaNome, vagaDescricao, vagaDataLimite, vagaCandidato: [] }
        vagas.push(cadastrarVaga)
    }  
}

function cadastrarCandidato(){

   const candidato = prompt("Digite o nome do candidato")
   const indice = prompt("Digite o indice da vaga desejada")
   const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja confirmar as informações abaixo: \n" +
        "Candidato: " + candidato + "\n" +
        "Vaga: " + vaga.vagaNome + "\n" +
        "Descrição: " + vaga.vagaDescricao + "\n" +
        "Data Limite: " + vaga.vagaDataLimite
    )

    if(confirmacao){
        vaga.vagaCandidato.push(candidato)
        console.log(vaga.vagaCandidato)
    }
}

function visualizarVaga(){

    indice = prompt("Digite o indice da vaga que deseja exibir: ")
    const vagaCandidato = vagas[indice]
    alert(
            indice + '\n' +
            vaga.nome + "\n" +
            vaga.descricao + "\n" +
            vaga.dataLimite + "\n" +
            vaga.vagaCandidato.length + "\n" +
            vaga.vagaCandidato )
        }

do {
    choice = prompt("Digite a opção que deseja: \n 1 - Listar vagas disponíveis \n 2 - Criar uma nova vaga \n 3 - Visualizar uma vaga \n 4 - Inscrever um candidado em uma vaga \n 5 - Excluir uma vaga \n 6 - Sair ") 

    switch(choice){
        

        case "1":
         listarVaga() 
         break
        case "2":
         cadastrarVaga()
         break
        case "3":
         visualizarVaga()
         break  
        case "4":
         cadastrarCandidato()
        break
        case "5":
        case "6":
            alert("Saindo do sistema")


    }

    
} while (choice !== "6");