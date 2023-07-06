<p align="center">
  <a href="http://moura.com/" target="blank"><img src="https://i.pinimg.com/736x/f5/9e/1a/f59e1af29bffff6d173d5a13bcd46962.jpg" width="200" alt="API LOGO" /></a>
</p>

<p align="center">API de quadrinhos da turma da mônica! Projeto para processo seletivo da squad digital!</p>
    <p align="center">
<a href="https://npm.com" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.linkedin.com/in/rierickson/" target="_blank"><img src="https://img.shields.io/badge/Author-Kaique-purple" alt="Author" /></a>

## Descrição

A API de Quadrinhos da Turma da Mônica é uma interface de programação de aplicações (API) que permite o gerenciamento de quadrinhos e usuários relacionados ao universo da Turma da Mônica. Essa API oferece operações de CRUD (Create, Read, Update, Delete) para quadrinhos e usuários, permitindo que desenvolvedores criem aplicativos, sites ou serviços com funcionalidades de cadastro, visualização, atualização e exclusão de quadrinhos e usuários.

para mais detalhes acessar a rota documentação: /docs

## Tecnologias

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

## Instalação

```bash
$ npm install
```

## Rodando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Teste 

```bash
########## Testes não totalmente implementados ##########

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Mais informações do autor

- Author - [Kaique Rierickson](https://www.linkedin.com/in/rierickson/)
- Instagram - [@K.rierickson](https://www.instagram.com/k.rierickson/)

## Implementando uma Arquitetura em Módulos com o Auxílio do Nest.js

Ao desenvolver um aplicativo com Node.js, é essencial adotar uma arquitetura bem organizada e escalável. Para isso, contei com o auxílio do framework Nest.js, que forneceu uma estrutura sólida e eficiente para a implementação da arquitetura em módulos.

O Nest.js é uma poderosa ferramenta que me ajudou a criar uma arquitetura em camadas, na qual o código é dividido em módulos independentes, cada um com sua própria responsabilidade e funcionalidades específicas.

### Módulos Organizados

Com base na arquitetura em módulos, pude organizar meu código de forma clara e coesa. Cada módulo encapsula um conjunto de componentes relacionados, como controladores, provedores de serviços e outros módulos. Essa estrutura modular facilitou a manutenção e reutilização de código, além de tornar o aplicativo mais fácil de entender e escalar.

### Controle de Requisições com Controladores

A implementação de controladores foi essencial para lidar com as requisições HTTP recebidas pelo aplicativo. Com o auxílio do Nest.js, pude definir rotas e endpoints de forma simples e intuitiva. Os controladores me permitiram mapear as requisições para funções específicas, chamadas de manipuladores de rota, simplificando a lógica de tratamento de requisições.

### Funcionalidades com Provedores de Serviços

Ao implementar provedores de serviços, pude separar as funcionalidades em classes independentes. Esses provedores de serviços são responsáveis por tarefas como acesso a bancos de dados, chamadas de API externas e lógica de negócios. O Nest.js facilitou a criação e injeção desses provedores de serviços nos controladores e em outros componentes, permitindo um código mais modular e altamente desacoplado.

### Módulos de Recursos Personalizados

Através da criação de módulos de recursos personalizados, consegui agrupar os controladores, provedores de serviços e outros componentes relacionados a um domínio específico do aplicativo. Isso proporcionou uma organização clara e facilitou a manutenção do código. Por exemplo, criei um módulo de usuários que continha o controlador de usuários, o serviço de usuários e outros componentes relacionados a funcionalidades relacionadas a usuários.

### Benefícios da Injeção de Dependência

O Nest.js oferece suporte à injeção de dependência, uma técnica poderosa que me auxiliou a gerenciar as dependências entre os componentes. Com essa funcionalidade, as dependências necessárias para cada componente foram automaticamente resolvidas e fornecidas pelo contêiner de injeção de dependência do Nest.js. Isso resultou em um código mais modular, testável e desacoplado.

Além desses recursos principais, o Nest.js também me ofereceu a capacidade de implementar middleware, interceptadores, filtros e outros recursos adicionais, permitindo a adição de lógica personalizada em diferentes pontos.

# Uso do SQLite como Banco de Dados

O SQLite é uma escolha popular para projetos menores e de médio porte devido às suas características e benefícios. Existem várias razões pelas quais optei por usar o SQLite no projeto em questão, e vou explicá-las abaixo:

## 1. Facilidade de uso e configuração

O SQLite é conhecido por sua facilidade de uso e configuração. Ele é um banco de dados embutido que não requer configurações complexas de servidor ou instalação separada. Com o SQLite, posso simplesmente incluir o arquivo de banco de dados junto com o restante do projeto, tornando o processo de implantação mais simples e fácil.

## 2. Portabilidade

O SQLite é uma escolha excelente para projetos que exigem portabilidade. Como o banco de dados é armazenado em um único arquivo, posso facilmente movê-lo entre diferentes ambientes ou até mesmo compartilhá-lo com outras pessoas. Isso é particularmente útil para desenvolvimento local, testes e implantações em diferentes ambientes.

## 3. Baixo consumo de recursos

O SQLite é conhecido por seu baixo consumo de recursos em comparação com outros sistemas de banco de dados. Ele opera em memória e não requer um processo de servidor em execução separadamente. Isso o torna uma escolha eficiente para projetos menores com recursos limitados.

## 4. Suporte nativo no NestJS

O NestJS, framework em que o projeto está sendo desenvolvido, possui suporte nativo ao SQLite. Ele fornece módulos e pacotes que simplificam a integração do SQLite com o aplicativo NestJS. Com essa integração, posso aproveitar recursos adicionais, como a facilidade de escrever consultas em SQL e a compatibilidade com bibliotecas ORM como o Prisma.

## 5. Adequado para aplicativos com requisitos de banco de dados simples

O SQLite é mais adequado para aplicativos com requisitos de banco de dados simples. Se o projeto não exigir escalabilidade extrema, alta concorrência ou recursos avançados de banco de dados, o SQLite pode fornecer uma solução adequada. Ele suporta a maioria das operações e consultas SQL básicas e é ideal para armazenar dados não críticos, como informações estáticas ou de configuração.
