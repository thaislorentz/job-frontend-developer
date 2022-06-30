# Yampi

## Iniciar o projeto
```
npm i
```
### Compilar o projeto
```
npm run dev
```

## Descrição do Projeto
<h1 align="center">Yampi Ecommerce</h1>
<p align="center">O projeto desenvolvido para este desafio é um site de uma empresa de vendas online.
A aplicação consiste em uma home page, tela de produto por categoria, tela de produto e o carrinho.
Para inicializar o projeto criei uma proposta de tela no figma abordando alguns conceitos de usabilidade deixando a aplicação fácil de se navegar. 
Acesso no link abaixo:</p>
<h1 align="center">
<a href="https://www.figma.com/file/bjs8t5opWxPsqmeAHefq8q/Yampi?node-id=0%3A1">🔗 FIGMA</a>
</h1>

### Descrição do projeto
Finalizado o processo de criação no figma comecei a desenvolver o front end. A aplicação se inicia com um loading para fazer as requisições a [FakeStoreAPI](https://fakestoreapi.com/docs) para consultar os produtos, as categorias e o carrinho. Após as respostas, se inicia a navegação do usuário pela aplicação. A home page contem um banner inicial, listagem das categorias, um mini tutorial de como comprar e a listagem de todos os produtos. Na página de cada categoria os produtos podem ser ordenados por nome, preço e avaliação. Ao clicar em qualquer card de produtos, o usuário é redirecionado para a tela de produtos podendo inserir a quantidade e adicionar ao carrinho. Para uma busca rápida de produtos, no header da página, o input de pesquisa filtra por nome e descrição dos produtos.

### Stack

- Vue
- VueX
- VueRouter
- Sass
- Axios



# Yampi: Teste prático para Frontend Javascript Developer

Boas vindas pessoa desenvolvedora.

Este é o teste que nós, aqui da [Yampi](https://www.yampi.com.br/), usamos para avaliar tecnicamente todas as pessoas que estão participando do processo seletivo para a vaga de Frontend.

## Como aplicar

Faça um fork desse projeto para iniciar o  desenvolvimento. PRs não serão aceitos.

## Desafio

A Yampi nasceu para revolucionar os produtos digitais para e-commerce. Nosso desafio diário é redefinir e aprimorar os processos de compra e venda online.

O seu desafio será criar uma vitrine básica de uma loja virtual, contendo:


#### Cabeçalho
Dentro do cabeçalho deverá conter um menu de navegação com as categorias da loja, um input para a busca dos produtos e um ícone que mostra o conteúdo do carrinho da loja.

#### Página inicial
Nessa página você deverá listar todos os produtos da loja. Você pode também colocar alguns banners para deixar sua loja ainda mais bonita.

#### Página da categoria
Nessa página você deverá mostrar o nome da categoria selecionada sendo o título principal da página e listar os produtos apenas dessa categoria. Você também deverá criar um `select` para definir como será a ordenação desses produtos, sendo as ordenações por *nome*, *preço* e *avaliação do produto*.

#### Página do produto
Nessa página você deverá mostrar os detalhes do produto, sendo o nome do produto como o título principal da página, a imagem, a descrição, o preço, um input para selecionar a quantidade e um botão para adicionar o produto ao carrinho.

#### Carrinho (página ou dropdown)

O carrinho da sua loja deverá conter as seguintes ações:

- Atualizar a quantidade de um produto no carrinho;
- Excluir um item do carrinho;
- Mensagem de carrinho vazio;
- Valor total, somando os preços de todos os itens no carrinho;
- Botão para a finalização do pedido;


### Instruções

- Utilize a [FakeStoreAPI](https://fakestoreapi.com/docs) para consultar os produtos e as categorias;
- Utilize a ferramenta [Vue CLI](https://cli.vuejs.org/) para iniciar seu projeto;
- Conte uma história. Utilize a metodologia de [commits semânticos](https://blog.cubos.io/que-tal-comecar-a-usar-commits-semanticos/);


## Stack

Este projeto deverá usar a seguinte stack de desenvolvimento:

- HTML;
- CSS;
- Sass;
- JavaScript;
- Vue + Vue Router + Vuex;

## O que avaliaremos de seu teste

- Histórico de commits do git;
- Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código;
- Alcance dos objetivos propostos;
- Adaptação mobile (layout responsivo);
- Componentização e extensibilidade dos componentes
Javascript;
