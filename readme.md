# Etapas de criacao do projeto

## npm create vite@lastest
criando  projeto com Vite

## cd projeto
Indo para pasta do projeto
## npm install
Instalando todas as dependencias do projeto
## npm install tailwindcss postcss autoprefixer -D
Instalando  tailwindCSS para o vite

## npx tailwindcss init -p
Criando o arquivo de configurcao do postcss
para poder se integrar com o vite

## Adicionando a tailwind.config.js
 "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

## Apagar arquivs desnecessarios
Apagando arquivos desnecessarios e limpando
aps.tsx

## Criando global.css na pasta styles
Adicionando as linhas
@tailwind base;
@tailwind components;
@tailwind utilities;

## Extensoes
GraphQL
Tailwind
PostCSS Language Support

## Criando projeto GraphCMS

### npm install @apollo/client graphql
Instalando apollo e grapphql.
Usar apollo para efetuar o consuumo da API.

### Criando pasta src/lib
Criando o arquivo apollo.ts de configuracao do apollo

### Tema tailwindCSS
colors: {
  green: {
    300: '#00B37E',
    500: '#00875F',
    700: '#015F43',
  },
  blue: {
    500: '#81D8F7',
  },
  orange: {
    500: '#FBA94C',
  },
  red: {
    500: '#F75A68',
  },
  gray: {
    100: '#E1E1E6',
    200: '#C4C4CC',
    300: '#8D8D99',
    500: '#323238',
    600: '#29292E',
    700: '#121214',
    900: '#09090A'
  }
},

### Componentes
Criando os componentes base da aplicacao

### Pagina de evento
Criando a pagina de eventos 