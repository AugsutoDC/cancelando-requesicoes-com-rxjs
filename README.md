## Cancelando requisição

Um simples projeto a fim de estudos do RXJS. 

Cancelando requisições utilizando criadores e operadores do RXJS.

Neste projeto foram utilizados do RXJS as funções e operadores ``fromEvent, switchMap, race, tap, map, ajax.``


**Detalhes do projeto:**
 - Ao clicar no botão ``Fazer Request`` é realizada uma requisição do tipo ``GET`` a API (contida neste projeto) e o retorno é exibido em tela.
 - Enquanto a requisição está sendo feita, é possível clicar no botão ``Parar Request`` para cancelar a requisição. É utilizado a combinação das funções de criação do RXJS ``switchMap e race`` para disputar os eventos de chamada a API e de cancelar a requisição, e o que for realizado primeiro, seja o executado. Neste caso, quando há ação do botão de cancelar requisição, o evento acontece antes da chamada a API e então o evento de chamada a API é cancelado.
 - Foi usado o ``tap`` para fazer os toggles do texto de feedback e dos botões.
 - Foi usado o ``ajax`` para fazer as requisições a API.

 **Instruções para rodar a api:**
- É necessário ter o ``node`` instalado.
- Acessar em um terminal o caminho da pasta onde se encontra o arquivo ``api.js`` (contido neste repositório).
- Executar o comando ``node api.js``.