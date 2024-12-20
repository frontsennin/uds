<div align="center">
  <img src="https://www.uds.com.br/assets/images/logo-uds.svg" alt="UDS Logo" width="200"/>
  <h1>Star Wars Character Explorer</h1>
  <p>Uma aplicação fullstack para explorar personagens do universo Star Wars</p>
</div>

## 🚀 Sobre o Projeto

Este projeto é uma aplicação fullstack desenvolvida como parte do processo seletivo da UDS Technology. A aplicação consome uma API externa de Star Wars, processa os dados através de um backend Node.js e apresenta as informações em uma interface React moderna e responsiva.

### 🎯 Objetivos

- Demonstrar conhecimento em integração de APIs
- Implementar uma aplicação fullstack completa
- Seguir o padrão visual da marca UDS
- Criar uma experiência de usuário fluida e agradável

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- Axios
- CORS

### Frontend
- React
- TypeScript
- Styled Components
- Axios

## 🏗️ Estrutura do Projeto
├── backend/
│ ├── src/
│ │ ├── services/
│ │ │ └── starWarsService.js
│ │ ├── routes.js
│ │ └── index.js
│ └── package.json
│
└── frontend/
├── src/
│ ├── components/
│ │ └── CharacterCard.tsx
│ ├── hooks/
│ │ └── useStarWars.ts
│ ├── services/
│ │ └── api.ts
│ ├── styles/
│ │ └── theme.ts
│ └── App.tsx
└── package.json


## 🚀 Como Executar

### Backend

bash
Entrar na pasta do backend
cd backend
Instalar dependências
npm install
Iniciar servidor
npm run dev


### Frontend
bash
Entrar na pasta do frontend
cd frontend
Instalar dependências
npm install
Iniciar aplicação
npm run dev


## 🎨 Features

- ✨ Grid responsivo de personagens
- 🎭 Cards com informações detalhadas
- 🌈 Design system UDS
- 🔄 Loading states
- 🚨 Tratamento de erros
- 📱 Layout responsivo

## 🔍 API Endpoints

### GET `/api/starwars/characters`
Retorna a lista de personagens com:
- Nome
- Espécie
- Planeta natal
- Gênero
- Altura
- Imagem

## 💅 Estilização

O projeto utiliza o design system da UDS, com:
- Cores corporativas
- Tipografia consistente
- Espaçamentos padronizados
- Componentes reutilizáveis
- Animações suaves

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Feito por Nicolas Mazia

---

<div align="center">
  <p>Tecnologia transforma. Nós criamos transformação.</p>
</div>