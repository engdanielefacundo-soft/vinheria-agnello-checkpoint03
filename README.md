# Vinheria Agnello — Checkpoint 03 (JavaScript)

> Sistema de gerenciamento e análise de estoque de vinhos finos desenvolvido em **JavaScript puro**, aplicando conceitos fundamentais de **Arrays**, **Objetos** e **Funções de Alta Ordem (Higher-Order Functions: `forEach`, `filter`, `reduce` e `map`)**.

---

## Informações do Projeto & Entrega

- **Nome do Projeto:** Vinheria Agnello — Checkpoint 03
- **Aluna:** Daniele Amaro Facundo
- **Repositório no GitHub:** [https://github.com/engdanielefacundo-soft/vinheria-agnello-checkpoint03](https://github.com/engdanielefacundo-soft/vinheria-agnello-checkpoint03)
- **Publicação no GitHub Pages:** [https://engdanielefacundo-soft.github.io/vinheria-agnello-checkpoint03/](https://engdanielefacundo-soft.github.io/vinheria-agnello-checkpoint03/)

---

## 🎯 Objetivo da Atividade

Aplicar na prática os conceitos essenciais da linguagem JavaScript:
1. **Manipulação de objetos e arrays** para modelagem de entidades do mundo real (rótulos de vinho).
2. **Uso de funções de alta ordem** para processamento, filtragem, transformação e acumulação de dados.
3. **Organização e modularização de código** através de funções reutilizáveis com parâmetros e retornos bem definidos.
4. **Comunicação e saída de dados** utilizando estritamente `console.log()` e `alert()` (sem formulários ou manipulação direta de DOM para os dados).

---

## 📋 Requisitos do Sistema & Implementações Realizadas

### 1. Array de Objetos de Vinhos
A vinícola conta com um catálogo inicial pré-carregado no código (`catalogoVinhos`), onde cada vinho é representado como um objeto contendo:
- `nome`: Nome comercial do vinho (string).
- `tipo`: Categoria da bebida (`'tinto'`, `'branco'` ou `'rosé'`).
- `safra`: Ano de colheita/engarrafamento (number).
- `estoque`: Quantidade de garrafas disponíveis na adega (number).

```javascript
const catalogoVinhos = [
  { nome: "Reserva Tinto Cabernet & Syrah", tipo: "tinto", safra: 2018, estoque: 14 },
  { nome: "Chardonnay da Serra", tipo: "branco", safra: 2022, estoque: 3 },
  { nome: "Rosé Provençal Suave", tipo: "rosé", safra: 2021, estoque: 8 },
  { nome: "Espumante Brut Tradicional", tipo: "branco", safra: 2020, estoque: 2 },
  { nome: "Merlot Clássico da Campanha", tipo: "tinto", safra: 2019, estoque: 18 },
  { nome: "Sauvignon Blanc Tropical", tipo: "branco", safra: 2023, estoque: 4 },
  { nome: "Pinot Noir Reserva Especial", tipo: "tinto", safra: 2020, estoque: 9 },
  { nome: "Malbec Gran Reserva Mendoza", tipo: "tinto", safra: 2017, estoque: 6 }
];
```

---

### 2. Funções Reutilizáveis Desenvolvidas

| Função | Finalidade | Método Utilizado |
| :--- | :--- | :--- |
| `adicionarVinho(nome, tipo, safra, estoque)` | Adiciona um novo objeto de vinho ao array após validação dos campos. | `push()` |
| `listarVinhos(lista)` | Itera sobre todos os vinhos e exibe a relação completa com detalhes no console e texto formatado. | **`forEach`** |
| `filtrarEstoqueBaixo(lista, limite = 5)` | Filtra e retorna apenas os vinhos com estoque crítico (< 5 garrafas). | **`filter`** |
| `calcularEstoqueTotal(lista)` | Acumula e soma a quantidade total de garrafas na adega da vinícola. | **`reduce`** |
| `obterNomesCaixaAlta(lista)` | Mapeia o array e retorna os nomes dos vinhos convertidos para letras maiúsculas. | **`map`** |
| `executarDemonstracaoCompleta()` | Orquestra a execução sequencial de todas as funções e emite o relatório via `console.log()` e `alert()`. | Orquestrador |

---

## 🧠 Detalhamento das Funções de Alta Ordem

### 🔹 `forEach` — Listagem Completa
O método `forEach` percorre o array executando uma função de callback para cada elemento, sem alterar a coleção original.
```javascript
function listarVinhos(lista = catalogoVinhos) {
  lista.forEach((vinho, indice) => {
    console.log(`#${indice + 1} | ${vinho.nome} | Tipo: ${vinho.tipo} | Safra: ${vinho.safra} | Estoque: ${vinho.estoque} un.`);
  });
}
```

### 🔹 `filter` — Vinhos com Estoque Crítico (< 5)
O método `filter` avalia cada item do array através de um predicado booleano, gerando um novo array contendo apenas os vinhos cujo estoque é inferior a 5 garrafas:
```javascript
function filtrarEstoqueBaixo(lista = catalogoVinhos, limite = 5) {
  return lista.filter(vinho => vinho.estoque < limite);
}
```

### 🔹 `reduce` — Estoque Total da Vinícola
O método `reduce` reduz todos os elementos do array a um único valor escalar. Partindo de um acumulador inicial igual a `0`, soma-se a propriedade `estoque` de cada garrafa:
```javascript
function calcularEstoqueTotal(lista = catalogoVinhos) {
  return lista.reduce((acumulador, vinho) => acumulador + vinho.estoque, 0);
}
```

### 🔹 `map` — Nomes em Caixa Alta
O método `map` transforma cada elemento do array de entrada em um novo elemento, retornando um novo array unidimensional com todos os nomes dos vinhos em letras maiúsculas (`toUpperCase()`):
```javascript
function obterNomesCaixaAlta(lista = catalogoVinhos) {
  return lista.map(vinho => vinho.nome.toUpperCase());
}
```

---

## 🖥️ Como Executar e Visualizar

### 1. Acesso Online (GitHub Pages)
1. Acesse o link publicado: [https://engdanielefacundo-soft.github.io/vinheria-agnello-checkpoint03/](https://engdanielefacundo-soft.github.io/vinheria-agnello-checkpoint03/)
2. Ao carregar a página, um **`alert()`** exibirá o resumo consolidado com:
   - Estoque total da vinícola (`reduce`)
   - Vinhos com estoque baixo (`filter`)
   - Nomes em caixa alta (`map`)
3. Pressione **`F12`** (ou botão direito &rarr; *Inspecionar* &rarr; aba *Console*) para visualizar os relatórios detalhados com formatações e cabeçalhos.
4. Utilize os botões interativos na tela para acionar ou reexecutar cada função isoladamente.

### 2. Execução Local
1. Clone o repositório ou baixe os arquivos:
   ```bash
   git clone https://github.com/engdanielefacundo-soft/vinheria-agnello-checkpoint03.git
   ```
2. Abra o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).
3. Abra o Console do Desenvolvedor (<kbd>F12</kbd>).

---

## 📁 Estrutura de Pastas do Projeto

```text
vinheria-agnello-checkpoint03/
│
├── index.html          # Página principal com descrição, títulos e script no final do body
├── README.md           # Documentação completa com explicações técnicas e links
│
└── src/
    ├── css/
    │   └── style.css   # Estilização com identidade visual da Vinheria Agnello
    ├── js/
    │   └── script.js   # Lógica em JS com objetos, arrays e Higher-Order Functions
    └── assets/
        └── imgs/       # Imagens e ícones de identidade visual
```

---

## ✅ Checklist de Critérios de Avaliação (100 pts)

| Critério Avaliado | Pontuação Máxima | Situação |
| :--- | :---: | :---: |
| **Uso correto de objetos e arrays** | 25 pts | ✅ **Atendido:** Array `catalogoVinhos` com objetos estruturados (`nome`, `tipo`, `safra`, `estoque`) e função `adicionarVinho`. |
| **Uso de ao menos 3 funções de alta ordem** | 25 pts | ✅ **Atendido:** Implementação completa de todas as 4 funções (`forEach`, `filter`, `reduce` e `map`). |
| **Organização e reutilização de código com funções** | 20 pts | ✅ **Atendido:** Funções modulares, documentadas com comentários explicativos (JSDoc) e reutilizáveis. |
| **Saídas via console.log ou alert()** | 10 pts | ✅ **Atendido:** Emissão formatada no console e janela modal amigável com `alert()`, sem manipulação de formulários. |
| **Estrutura do projeto e clareza do README.md** | 10 pts | ✅ **Atendido:** Estrutura estrita conforme solicitada e documentação detalhada com instruções e exemplos. |
| **Estilização básica aplicada ao HTML** | 10 pts | ✅ **Atendido:** Arquivo `style.css` aplicado, responsivo e alinhado à paleta clássica da vinheria. |
| **TOTAL** | **100 pts** | 🏆 **100% dos requisitos concluídos** |

---

## 👩‍💻 Autora

**Daniele Amaro Facundo**  
- GitHub: [@engdanielefacundo-soft](https://github.com/engdanielefacundo-soft)  
- E-mail: engdanielefacundo@gmail.com  
