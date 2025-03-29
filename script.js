function prepararCafe(comAcucar = false) {
    // Verificar materiais necessários
    if (!xicaraDisponivel) {
      lavarXicara();
    }
    
    if (!aguaQuente) {
      ferverAgua();
    }
    
    // Preparar o café
    console.log("Colocando pó de café no filtro...");
    console.log("Posicionando filtro na xícara...");
    console.log("Despejando água quente no filtro...");
    
    // Simular espera
    setTimeout(() => {
      console.log("Removendo filtro...");
      
      // Finalizar
      if (comAcucar) {
        console.log("Adicionando açúcar...");
      }
      
      console.log("Mexendo o café...");
      console.log("Café pronto para servir!");
    }, 60000); // 1 minuto
  }
  
  // Variáveis de estado (simuladas)
  let xicaraDisponivel = false;
  let aguaQuente = false;
  
  // Funções auxiliares
  function lavarXicara() {
    console.log("Lavando xícara...");
    xicaraDisponivel = true;
  }
  
  function ferverAgua() {
    console.log("Fervendo água...");
    aguaQuente = true;
  }
  
  // Executar
  prepararCafe(true); // Prepara café com açúcar