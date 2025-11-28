let opcao = Number(prompt(`
    Escolha uma opcão
===========================
[1] Salgado    
[2] Bebidas    
[3] Lanches    
[4] Sobremesas    
[5] Sair 
===========================    
    
    
    `

))

switch (opcao) {
    case 1:
        
        let sacolaSalgado = Number(prompt(`Qual salgado você deseja comprar?
            ==========================
            [1] Coxinha    
            [2] Kibe     
            [3] Bolinha de queijo    
            [4] Risole
            ==========================
              `))
        break;
    case 2:
     
         let sacolaBebidas = Number(prompt(`Qual Bebida você deseja comprar?
            ==========================
            [1] Cerveja   
            [2] Refrigerante     
            [3] Suco    
            [4] Agua
            ==========================
              `))
        break;
    case 3:
       
         let sacolaLanches = Number(prompt(`Qual Lanche você deseja comprar?
            ==========================
            [1] X-tudo  
            [2] X-salada     
            [3] X-burguer    
            [4] X-bacon
            ==========================
              `))
        break;
    case 4:
        
          let sacolaSobremasas = Number(prompt(`Qual Sobrema você deseja comprar?
            ==========================
            [1] Mouse  
            [2] Pudim     
            [3] Bolo  
            [4] Brigadeiro
            ==========================
              `))
        break;
    case 5:
        alert("Sistema finalizado")
        
        break;

    default:
        alert("Não existe essa opção")
        break;
}