## Cancelando requisição

Um simples projeto a fim de estudos do RXJS. 

Cancelando requisições utilizando criadores e operadores do RXJS.

Neste projeto foram utilizados do RXJS as funções e operadores ``fromEvent, switchMap, race, tap, map, ajax.``


**Detalhes do projeto:**
 - Ao clicar no botão ``Fazer Request`` é disparado um evento em que é realizado uma requisição do verbo ``GET`` a API contida neste projeto e o retorno é exibido em tela.
 - Durante a requisição é possível clicar no botão ``Parar Request`` para cancelar a requisição. É utilizado uma combinação de funções de criação do RXJS ``switchMap e race`` onde há uma concorrência entre os eventos de chamada a API e de cancelar a requisição, por fim o primeiro a ser finalizado é retornado e o outro evento é cancelado. Neste caso, quando há a ação do botão de cancelar requisição, o evento acontece antes da chamada a API e então o evento de chamada a API é cancelado.
 - Foi utilizado o operador ``tap`` para fazer os toggles do texto de feedback e dos botões.
 - Foi utilizado o criador  ``ajax`` para fazer as requisições a API.

 **Instruções para rodar a api:**
- É necessário ter o ``node`` instalado.
- Acessar em um terminal o caminho da pasta onde se encontra o arquivo ``api.js`` (contido neste repositório).
- Executar o comando ``node api.js``.
