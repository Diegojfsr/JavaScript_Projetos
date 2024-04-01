<!--
![](https://github.com/Diegojfsr/JavaScript_Projects_Beginners/blob/main/Imagens/Capa_Projetos_JavaScript.jpg)
-->
<!--
JavaScript Projects for Beginners – Easy Ideas to Get Started Coding JS
-->

# Como criar um Contador

## 📝 Etapas do Processo de Desenvolvimento

<!--### [#1 Etapa:](#HTML)-->
### [Marcação HTML](https:)<br>
Neste exemplo, usaremos um elemento div com um id header, para o title. Um elemento div main com os ids do sbotoes e do contador.<br>
[Visualizar Código](https://github.com/Diegojfsr/JavaScript_Projects_Beginners/blob/main/Projetos/CriarContador/index.html)

<!--### [#2 Etapa:](#CSS)-->
### [Estilo CSS](https:)<br>
Neste exemplo, utilizaremos estilização para a div header, contador e para os botões. Além do codigo do media query.<br>
[Visualizar Código](https://github.com/Diegojfsr/JavaScript_Projects_Beginners/blob/main/Projetos/CriarContador/style.css)

<!--### [#3 Etapa:](#JavaScript)-->
### [Funções JavaScript](https:)<br>
Aqui definiremos as funções do
[Display](#displaydisplay): onde os números são mostrados. 
E as funções dos
[Botões](#botõesbotoes): onde vamos controlar o nosso contador.
<br>
[Visualizar Código](https://github.com/Diegojfsr/JavaScript_Projects_Beginners/blob/main/Projetos/CriarContador/script.js)

1. [Display](#display)
    - Selecionamos o elemento do display com: ``document.getElementById();``
    - Para conseguirmos efetuar as operações necessárias e mostrar os resultados dentro do nosso contador, precisamos pegar o valor atual que estará sendo mostrado dentro do nosso *display*, com: ``document.getElementById().textContent;``
    - O valor  que pegamos pelo *innerText* vem como uma string, no caso dese projeto, queremos trabalhar com inteiros, por isso, precisamos transformar esse valor recebido de string para inteiro, com: ``parseInt(string, base);``


2. [Botões](#botões)
    - Para conseguir realizar ações quando clicamos em qualquer um dos botões da nossa aplicação, precisaremos selecionar esses elementos com: ``document.getElementById();``
    - Após selecionar os elementos referente aos botões, iremos adicionar um evento de click em cada um deles, com: ``element.addEventListener('click', () => { // Your script here })``
    - *Increase / Decrease*, Vamos atualizar o valor mostrado no display, com: ``document.getElementById().textContent = `${number}`;``
    - *Increase*, Vamos Aaumentar o valor atual em +1, com: ``number += 1;``
    - *Decrease*, Vamos Diminuir o valor atual em -1, com: ``number -= 1;``
    - *Reset*, Vamos Atualizar o valor mostrado no display para 0, com: ``number = 0;``
    ``display.textContent = `${number}`;``





## ⚠️ Especificação e requisitos

- [Noções de JavaScript](https:)
- [VS Code](https:)
- [Git/Github](https:)
- [Desenvolvimento Responsivo](https:)

## 🛠 Tecnologias Utilizadas

- [Arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Expressões e operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [document.getElementById()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById)
- [Node.textContent](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
- [GlobalEventHandlers.onclick](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)
- [parseInt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt)


## 📑 Referências Utilizadas

- [Larissa Kich](https://youtu.be/n-ujf4-rk3g)
- [Coisa de Dev](https://youtu.be/tla-kxvHQvA)
- [github.levxyca](https://github.com/levxyca/counter?tab=readme-ov-file)



## 🤝 Contribuindo

 Este repositório foi criado para fins de estudo, então contribua com ele. Se te ajudei de alguma forma, ficarei feliz em
saber. E caso você conheça alguém que se identidique com o conteúdo, não deixe de compatilhar.



