# Consulta Cadastro - Frontend

Este repositório contém o frontend do sistema de [Consulta de Crédito](https://github.com/Trajy/Desafio-Consulta-Credito), desenvolvido utilizando Angular Framework.

## Sumário
- [Consulta Cadastro - Frontend](#consulta-cadastro---frontend)
  - [Sumário](#sumário)
  - [Como Executar o Projeto](#como-executar-o-projeto)
  - [Funcionalidades](#funcionalidades)
  - [Responsividade](#responsividade)
  - [Programação Reativa](#programação-reativa)

## Como Executar o Projeto
O ambiente de desenvolvimento foi constituído utilizando containers Docker e Docker Compose. Para detalhes sobre como executar o projeto, vide a documentação no repositório principal [Desafio Consulta Crédito](https://github.com/Trajy/Desafio-Consulta-Credito).

>[!NOTE]
> Após o build do ambiente utilizando Docker Compose a aplicação frontend estará disponivel em http://localhost:4200

## Funcionalidades
Duas funcionalidades básicas para demonstração dos conceitos abordados foram desenvolvidas:

- Consulta dos dados de crédito a partir do número de Crédito
- Consulta dos dados de crédito relativos ao número da Nfse

## Responsividade
O layout base da aplicação frontend foi desenvolvido de forma responsiva para se adaptar aos diferentes tamanhos de tela. Utilizando essa abordagem torna-se simples o desenvolvimento de novos components, pois o layout principal será o container que encapsula a visualização dos demais components.

![image](./docs/img/responsive-screen.gif)

## Programação Reativa
O padrão de projeto Observable foi utilizado (Formulários reativos do Angular e a biblioteca rxjs) para executar as buscas na Api de Consulta de Crédito (backend) quando o usuário inserir valores no campo de busca.

![image](./docs/img/reactive%20request.gif)
