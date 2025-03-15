# Consulta Cadastro - Frontend

Este repositório contêm o frontend do sistema de [Consulta de Credito](https://github.com/Trajy/Desafio-Consulta-Credito). Deselvolvido utilizando Angular Framework.

## Sumário
  - [Como Executar o Projeto](#como-executar-o-projeto)
  - [Funcionalidades](#funcionalidades)
  - [Resposividade](#resposividade)
  - [Programação Reativa](#programação-reativa)

## Como Executar o Projeto
O ambiente de desenvolvimento foi constituido utilizando containers Docker e Docker Compose, para detalhes sobre como executar o projeto vide a documentação no repositório principal [Desafio Consulta Crédito](https://github.com/Trajy/Desafio-Consulta-Credito).

>[!NOTE]
> Após o build do ambiente utilizando Docker Compose a aplicação frontend estará disponivel em http://localhost:4200

## Funcionalidades
Duas funcionalidades basicas para demonstração dos conceitos abordados foram desenvolvidas.

- Consulta dos dados de crédito a partir do numero de Crédito
- Consulta dos dados de crédito relativos ao numero da Nfse

## Resposividade
O layout base da aplicação frontend foi desenvolvido de forma responsiva para se adaptar aos diferentes tamanhos de tela. utilizando essa abordagem torna-se simples o desenvolvimento de novos compoenents, pois, o layout principal sera o container que emcapsula a vizualização dos demais compoenents.

![image](./docs/img/responsive-screen.gif)

## Programação Reativa
O padrão de projeto Observable foi utilizado (Formulários reativos do Angular e a biblioteca rxjs) para executar as buscas na Api de Consulta de Crétido (backend) quando o usuario inserir valores no campo de busca.

![image](./docs/img/reactive%20request.gif)
