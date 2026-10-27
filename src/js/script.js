/**
 * ============================================================================
 * VINHERIA AGNELLO — CHECKPOINT 03: JAVASCRIPT
 * ============================================================================
 * Aluna: Daniele Amaro Facundo
 * Repositório: vinheria-agnello-checkpoint03
 * Objetivo: Manipulação de arrays de objetos e aplicação prática de funções
 *           de alta ordem (Higher-Order Functions: forEach, filter, reduce, map),
 *           com saídas estruturadas em console.log e alert().
 * ============================================================================
 */

/* ============================================================================
 * 1. ARRAY DE OBJETOS REPRESENTANDO OS VINHOS DA VINÍCOLA
 * ============================================================================
 * Cada objeto contém:
 *  - nome: string (rótulo comercial do vinho)
 *  - tipo: string ('tinto', 'branco' ou 'rosé')
 *  - safra: number (ano de colheita/engarrafamento)
 *  - estoque: number (quantidade de garrafas disponíveis na adega)
 *
 * Incluímos itens com estoque normal (>= 5) e propositalmente com estoque baixo
 * (< 5) para demonstrar a filtragem do sistema.
 */
const catalogoVinhos = [
  {
    nome: "Reserva Tinto Cabernet & Syrah",
    tipo: "tinto",
    safra: 2018,
    estoque: 14
  },
  {
    nome: "Chardonnay da Serra",
    tipo: "branco",
    safra: 2022,
    estoque: 3 // Estoque baixo (< 5)
  },
  {
    nome: "Rosé Provençal Suave",
    tipo: "rosé",
    safra: 2021,
    estoque: 8
  },
  {
    nome: "Espumante Brut Tradicional",
    tipo: "branco",
    safra: 2020,
    estoque: 2 // Estoque baixo (< 5)
  },
  {
    nome: "Merlot Clássico da Campanha",
    tipo: "tinto",
    safra: 2019,
    estoque: 18
  },
  {
    nome: "Sauvignon Blanc Tropical",
    tipo: "branco",
    safra: 2023,
    estoque: 4 // Estoque baixo (< 5)
  },
  {
    nome: "Pinot Noir Reserva Especial",
    tipo: "tinto",
    safra: 2020,
    estoque: 9
  },
  {
    nome: "Malbec Gran Reserva Mendoza",
    tipo: "tinto",
    safra: 2017,
    estoque: 6
  }
];

/* ============================================================================
 * 2. FUNÇÃO: ADICIONAR NOVO VINHO AO ARRAY
 * ============================================================================
 * Cria um novo objeto com os dados informados e o insere no catálogo usando push().
 *
 * @param {string} nome - Nome do rótulo
 * @param {string} tipo - Categoria do vinho ('tinto', 'branco' ou 'rosé')
 * @param {number} safra - Ano da safra
 * @param {number} estoque - Quantidade em estoque
 * @returns {object} O objeto de vinho recém-criado
 */
function adicionarVinho(nome, tipo, safra, estoque) {
  // Validação básica dos parâmetros de entrada
  if (!nome || !tipo || isNaN(safra) || isNaN(estoque)) {
    console.warn("Aviso: Dados inválidos ao tentar adicionar vinho.");
    return null;
  }

  const novoVinho = {
    nome: String(nome).trim(),
    tipo: String(tipo).toLowerCase().trim(),
    safra: Number(safra),
    estoque: Number(estoque)
  };

  catalogoVinhos.push(novoVinho);

  console.log(`[SUCESSO] Vinho "${novoVinho.nome}" adicionado com sucesso ao estoque!`);
  return novoVinho;
}

/* ============================================================================
 * 3. FUNÇÃO: LISTAR TODOS OS VINHOS (USO DE forEach)
 * ============================================================================
 * Utiliza o método forEach() para percorrer cada objeto do array e exibir seus
 * detalhes formatados no console e preparar um texto legível para alert().
 *
 * @param {Array<object>} lista - Array de objetos de vinhos
 * @returns {string} Texto formatado com a lista completa
 */
function listarVinhos(lista = catalogoVinhos) {
  console.log("==================================================");
  console.log("📋 LISTA COMPLETA DE VINHOS DA VINHERIA AGNELLO (forEach)");
  console.log("==================================================");

  let textoFormatado = "📋 LISTA COMPLETA DE VINHOS:\n\n";

  // Uso da função de alta ordem: forEach()
  lista.forEach((vinho, indice) => {
    const linhaConsole = `#${indice + 1} | ${vinho.nome} | Tipo: ${vinho.tipo.toUpperCase()} | Safra: ${vinho.safra} | Estoque: ${vinho.estoque} garrafas`;
    console.log(linhaConsole);

    textoFormatado += `${indice + 1}. ${vinho.nome}\n   Tipo: ${vinho.tipo} | Safra: ${vinho.safra} | Estoque: ${vinho.estoque} un.\n`;
  });

  return textoFormatado;
}

/* ============================================================================
 * 4. FUNÇÃO: FILTRAR VINHOS COM ESTOQUE BAIXO (USO DE filter)
 * ============================================================================
 * Utiliza o método filter() para encontrar e retornar todos os vinhos que
 * possuem quantidade de estoque inferior ao limite estipulado (padrão: 5).
 *
 * @param {Array<object>} lista - Array de objetos de vinhos
 * @param {number} limite - Limite para considerar estoque crítico (padrão: 5)
 * @returns {Array<object>} Novo array filtrado contendo apenas vinhos com estoque baixo
 */
function filtrarEstoqueBaixo(lista = catalogoVinhos, limite = 5) {
  console.log("==================================================");
  console.log(`⚠️ VINHOS COM ESTOQUE BAIXO (< ${limite} unidades) (filter)`);
  console.log("==================================================");

  // Uso da função de alta ordem: filter()
  const vinhosEstoqueBaixo = lista.filter(vinho => vinho.estoque < limite);

  vinhosEstoqueBaixo.forEach((vinho, indice) => {
    console.warn(`[ALERTA ESTOQUE] #${indice + 1} ${vinho.nome} (${vinho.safra}) — Apenas ${vinho.estoque} garrafas restantes!`);
  });

  return vinhosEstoqueBaixo;
}

/* ============================================================================
 * 5. FUNÇÃO: CALCULAR ESTOQUE TOTAL DA VINÍCOLA (USO DE reduce)
 * ============================================================================
 * Utiliza o método reduce() para iterar sobre o array acumulando a soma do
 * estoque de cada vinho, retornando o volume total de garrafas na adega.
 *
 * @param {Array<object>} lista - Array de objetos de vinhos
 * @returns {number} Soma total de garrafas no estoque
 */
function calcularEstoqueTotal(lista = catalogoVinhos) {
  console.log("==================================================");
  console.log("📦 CÁLCULO DO ESTOQUE TOTAL DA VINÍCOLA (reduce)");
  console.log("==================================================");

  // Uso da função de alta ordem: reduce()
  // acumulador inicia em 0 e soma a propriedade 'estoque' de cada item
  const estoqueTotal = lista.reduce((acumulador, vinho) => {
    return acumulador + vinho.estoque;
  }, 0);

  console.log(`Estoque total disponível na Vinheria Agnello: ${estoqueTotal} garrafas.`);
  return estoqueTotal;
}

/* ============================================================================
 * 6. FUNÇÃO: OBTER NOMES DOS VINHOS EM CAIXA ALTA (USO DE map)
 * ============================================================================
 * Utiliza o método map() para transformar o array de objetos em um novo array
 * contendo exclusivamente os nomes dos vinhos convertidos em letras maiúsculas.
 *
 * @param {Array<object>} lista - Array de objetos de vinhos
 * @returns {Array<string>} Novo array com os nomes em caixa alta
 */
function obterNomesCaixaAlta(lista = catalogoVinhos) {
  console.log("==================================================");
  console.log("🔤 NOMES DOS VINHOS EM CAIXA ALTA (map)");
  console.log("==================================================");

  // Uso da função de alta ordem: map()
  const nomesCaixaAlta = lista.map(vinho => vinho.nome.toUpperCase());

  nomesCaixaAlta.forEach((nome, indice) => {
    console.log(`${indice + 1}. ${nome}`);
  });

  return nomesCaixaAlta;
}

/* ============================================================================
 * 7. EXECUÇÃO INTEGRADA E EXIBIÇÃO NO CONSOLE E EM ALERT
 * ============================================================================
 * Executa todas as funções sequencialmente para cumprir os requisitos da entrega
 * e monta um resumo limpo e estruturado exibido no alert() e no console.log.
 */
function executarDemonstracaoCompleta(dispararAlert = true) {
  console.clear();
  console.log("🍷 ================================================== 🍷");
  console.log("   VINHERIA AGNELLO — DEMONSTRAÇÃO CHECKPOINT 03");
  console.log("   Aluna: Daniele Amaro Facundo");
  console.log("🍷 ================================================== 🍷\n");

  // Demonstração da função de adicionar vinho
  adicionarVinho("Syrah Edição Comemorativa", "tinto", 2021, 5);

  // 1. Listar todos com forEach
  const textoLista = listarVinhos(catalogoVinhos);

  // 2. Filtrar estoque baixo com filter
  const listaBaixoEstoque = filtrarEstoqueBaixo(catalogoVinhos, 5);

  // 3. Calcular estoque total com reduce
  const totalGarrafas = calcularEstoqueTotal(catalogoVinhos);

  // 4. Mapear nomes para caixa alta com map
  const listaNomesCaixaAlta = obterNomesCaixaAlta(catalogoVinhos);

  console.log("\n==================================================");
  console.log("✅ TODAS AS FUNÇÕES DE ALTA ORDEM FORAM EXECUTADAS!");
  console.log("   - forEach: Listagem completa");
  console.log("   - filter:  Filtro de estoque crítico (< 5)");
  console.log("   - reduce:  Soma total do estoque");
  console.log("   - map:     Mapeamento de nomes para MAIÚSCULAS");
  console.log("==================================================");

  // Exibição amigável e consolidada via alert() conforme exigido pelo enunciado
  if (dispararAlert) {
    const resumoEstoqueBaixo = listaBaixoEstoque
      .map(v => `• ${v.nome} (apenas ${v.estoque} un.)`)
      .join("\n");

    const resumoCaixaAlta = listaNomesCaixaAlta
      .map((n, i) => `${i + 1}. ${n}`)
      .join("\n");

    const mensagemAlert =
      "🍷 VINHERIA AGNELLO — CHECKPOINT 03 🍷\n" +
      "Sistema de Gestão de Estoque em JavaScript\n" +
      "Aluna: Daniele Amaro Facundo\n\n" +
      "--------------------------------------------------\n" +
      "📦 1. ESTOQUE TOTAL DA VINÍCOLA (reduce):\n" +
      `Total: ${totalGarrafas} garrafas cadastradas\n\n` +
      "--------------------------------------------------\n" +
      "⚠️ 2. VINHOS COM ESTOQUE BAIXO (< 5 un.) (filter):\n" +
      `${resumoEstoqueBaixo}\n\n` +
      "--------------------------------------------------\n" +
      "🔤 3. NOMES EM CAIXA ALTA (map):\n" +
      `${resumoCaixaAlta}\n\n` +
      "--------------------------------------------------\n" +
      "💡 DICA: Abra o Console do Desenvolvedor (F12) para conferir a listagem completa (forEach) e todos os relatórios formatados!";

    if (typeof alert !== "undefined") {
      alert(mensagemAlert);
    }
  }
}

// Expõe as funções e o catálogo no escopo global (window ou globalThis) para permitir testes interativos via console e botões da página
if (typeof window !== "undefined") {
  window.catalogoVinhos = catalogoVinhos;
  window.adicionarVinho = adicionarVinho;
  window.listarVinhos = listarVinhos;
  window.filtrarEstoqueBaixo = filtrarEstoqueBaixo;
  window.calcularEstoqueTotal = calcularEstoqueTotal;
  window.obterNomesCaixaAlta = obterNomesCaixaAlta;
  window.executarDemonstracaoCompleta = executarDemonstracaoCompleta;
}

// Executa a demonstração automaticamente ao carregar o script
executarDemonstracaoCompleta(typeof alert !== "undefined");
