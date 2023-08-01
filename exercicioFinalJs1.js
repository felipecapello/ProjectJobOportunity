vagas = []
vaga = {}
candidato = {}

do {
    choice = prompt("Digite a opção que deseja: \n 1 - Listar vagas disponíveis \n 2 - Criar uma nova vaga \n 3 - Visualizar uma vaga \n 4 - Inscrever um candidado em uma vaga \n 5 - Excluir uma vaga \n 6 - Sair ") 

    switch(choice){
        

        case "1":
            for(i=0; i<vagas.length; i++){
                alert(
                     (i+1) + "º"  + " Vaga " + "\n" +
                     vaga.nome + "\n" +
                     vaga.candidato
                )
            }
            break
        case "2":
            vaga.nome = prompt("Digite o nome da vaga")
            vaga.descricao = prompt("Digite a descrição da vaga")
            vaga.dataLimite = prompt("Digite a data limite da vaga")
            vaga.candidato = []
            vagas.push(vaga)
            
            break
        case "3":

        case "4":
            candidato.nome = prompt("Digite o nome do candidato")
            candidato.indiceVaga = prompt("Digite o indice da vaga desejada")
            for(i=0; i<vagas.lenght; i++){
                    vaga.candidato.push(candidato)
                }
        break

        case "5":


        case "6":
            alert("Saindo do sistema")


    }

    
} while (choice !== "6");