# DevFreela Angular

Interface web moderna e responsiva para a plataforma DevFreela, desenvolvida com Angular e TypeScript para oferecer uma experiência de usuário excepcional.

![Angular](https://img.shields.io/badge/Angular-15+-red)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/license-MIT-green)

## Sobre o Projeto

O **DevFreela Angular** é a interface frontend da plataforma DevFreela, proporcionando uma experiência intuitiva e moderna para clientes e freelancers gerenciarem seus projetos. A aplicação foi desenvolvida com foco em performance, usabilidade e design responsivo.

### Funcionalidades Principais

- **Dashboard Interativo**
  - Painel personalizado para clientes e freelancers
  - Métricas e estatísticas em tempo real
  - Gráficos e indicadores de performance

- **Gestão de Projetos**
  - Interface intuitiva para criar e editar projetos
  - Visualização detalhada de propostas
  - Sistema de filtros e busca avançada
  - Timeline de progresso dos projetos

- **Perfil de Usuário**
  - Edição completa de perfil
  - Upload de foto e documentos
  - Portfólio de trabalhos realizados
  - Sistema de avaliações e reviews

- **Comunicação**
  - Chat em tempo real
  - Sistema de notificações
  - Comentários nos projetos
  - Histórico de conversas

- **Sistema de Pagamentos**
  - Interface para visualizar transações
  - Histórico de pagamentos
  - Relatórios financeiros

## Tecnologias Utilizadas

### Frontend Core
- **Angular 15+** - Framework principal
- **TypeScript 4.9+** - Linguagem de programação
- **RxJS** - Programação reativa
- **Angular Material** - Componentes UI
- **Bootstrap 5** - Framework CSS
- **Sass/SCSS** - Pré-processador CSS

### Bibliotecas e Ferramentas
- **Angular CLI** - Ferramenta de desenvolvimento
- **Angular Router** - Roteamento SPA
- **Angular Forms** - Formulários reativos
- **Angular HTTP Client** - Comunicação com API
- **NgRx** - Gerenciamento de estado (opcional)
- **Chart.js** - Gráficos e visualizações
- **Socket.io** - Comunicação em tempo real
- **Moment.js** - Manipulação de datas

### Desenvolvimento e Build
- **Webpack** - Bundler de módulos
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Karma + Jasmine** - Testes unitários
- **Protractor/Cypress** - Testes E2E

## Estrutura do Projeto

```
DevFreelaAngular/
├── src/
│   ├── app/
│   │   ├── core/                  # Módulos principais (auth, guards, interceptors)
│   │   ├── shared/                # Componentes, pipes e services compartilhados
│   │   ├── features/              # Módulos de funcionalidades
│   │   │   ├── auth/              # Autenticação e registro
│   │   │   ├── dashboard/         # Dashboard principal
│   │   │   ├── projects/          # Gestão de projetos
│   │   │   ├── profile/           # Perfil do usuário
│   │   │   └── chat/              # Sistema de chat
│   │   ├── layout/                # Componentes de layout (header, sidebar, footer)
│   │   └── app-routing.module.ts  # Configuração de rotas
│   ├── assets/                    # Imagens, ícones e recursos estáticos
│   ├── environments/              # Configurações de ambiente
│   └── styles/                    # Estilos globais SCSS
├── e2e/                          # Testes end-to-end
├── docs/                         # Documentação do projeto
└── angular.json                  # Configuração do Angular CLI
```

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js 18+](https://nodejs.org/)
- [npm 8+](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Angular CLI](https://angular.io/cli) `npm install -g @angular/cli`
- [Git](https://git-scm.com/)

## 🔧 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/luanheuripedes/DevFreelaAngular.git
cd DevFreelaAngular
```

### 2. Instale as dependências
```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 3. Configuração de Ambiente

Crie os arquivos de configuração para diferentes ambientes:

**src/environments/environment.ts** (Desenvolvimento)
```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7000/api',
  socketUrl: 'https://localhost:7000',
  firebase: {
    // Configurações do Firebase (se usar)
  }
};
```

**src/environments/environment.prod.ts** (Produção)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.devfreela.com/api',
  socketUrl: 'https://api.devfreela.com',
  firebase: {
    // Configurações do Firebase para produção
  }
};
```

### 4. Execute o projeto
```bash
# Desenvolvimento
ng serve

# Desenvolvimento com porta específica
ng serve --port 4200

# Produção local
ng serve --configuration production
```

A aplicação estará disponível em `http://localhost:4200`

## Scripts Disponíveis

```bash
# Desenvolvimento
npm start                 # Inicia o servidor de desenvolvimento
npm run build            # Build para produção
npm run build:dev        # Build para desenvolvimento
npm run watch            # Build em modo watch

# Testes
npm test                 # Executa testes unitários
npm run test:coverage    # Testes com coverage
npm run e2e              # Testes end-to-end

# Qualidade de Código
npm run lint             # Executa ESLint
npm run lint:fix         # Corrige problemas do ESLint
npm run format           # Formata código com Prettier

# Análise
npm run analyze          # Analisa o bundle da aplicação
npm run stats            # Gera estatísticas do build
```

## Build e Deploy

### Build para Produção
```bash
# Build otimizado
ng build --configuration production

# Build com análise de bundle
ng build --stats-json
npm run analyze
```

### Deploy no GitHub Pages
```bash
# Instalar gh-pages
npm install -g angular-cli-ghpages

# Deploy
ng deploy --base-href=/DevFreelaAngular/
```

### Deploy no Netlify
```bash
# Build
ng build --configuration production

# Upload da pasta dist/devfreela-angular para o Netlify
```

## Testes

### Testes Unitários
```bash
# Executar todos os testes
ng test

# Testes com coverage
ng test --code-coverage

# Testes em modo watch
ng test --watch=true
```

### Testes E2E
```bash
# Cypress
npm run cypress:open

# Protractor (se configurado)
ng e2e
```

## Funcionalidades Implementadas

### Autenticação
- [x] Login e registro de usuários
- [x] Recuperação de senha
- [x] Guards de autenticação
- [x] Interceptor JWT

### Dashboard
- [x] Métricas personalizadas
- [x] Gráficos interativos
- [x] Notificações em tempo real
- [x] Quick actions

### Projetos
- [x] CRUD completo de projetos
- [x] Sistema de filtros
- [x] Upload de arquivos
- [x] Gestão de propostas

### Perfil
- [x] Edição de dados pessoais
- [x] Upload de avatar
- [x] Portfólio de trabalhos
- [x] Configurações de conta

### Em Desenvolvimento
- [ ] Chat em tempo real
- [ ] Notificações push
- [ ] PWA features

## Integração com Backend

Esta aplicação consome a API do projeto **[DevFreela](https://github.com/luanheuripedes/DevFreela)**.

### Principais Services
- **AuthService** - Autenticação e autorização
- **ProjectService** - Gestão de projetos
- **UserService** - Gestão de usuários
- **NotificationService** - Sistema de notificações
- **UploadService** - Upload de arquivos

## Performance

### Otimizações Implementadas
- **Lazy Loading** - Carregamento sob demanda de módulos
- **OnPush Strategy** - Otimização de change detection
- **Tree Shaking** - Remoção de código não utilizado
- **Compression** - Gzip e Brotli
- **Service Workers** - Cache inteligente

### Métricas de Performance
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 500KB (gzipped)

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Siga os padrões de código estabelecidos
4. Execute os testes (`npm test`)
5. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
6. Push para a branch (`git push origin feature/AmazingFeature`)
7. Abra um Pull Request

### Padrões de Código
- Use **PascalCase** para classes e interfaces
- Use **camelCase** para variáveis e métodos
- Use **kebab-case** para nomes de arquivos
- Siga o [Angular Style Guide](https://angular.io/guide/styleguide)

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

**Luan Heuripedes**
- LinkedIn: [/in/luan-heuripedes](https://www.linkedin.com/in/luan-heuripedes/)
- GitHub: [@luanheuripedes](https://github.com/luanheuripedes)

## Suporte

Se você tiver alguma dúvida ou precisar de ajuda:
- Abra uma [issue](https://github.com/luanheuripedes/DevFreelaAngular/issues)
- Entre em contato através do LinkedIn
- Consulte a [documentação do Angular](https://angular.io/docs)

---

##  Agradecimentos

Projeto desenvolvido para estudo e aplicação de conceitos modernos do Angular, incluindo:
- Arquitetura baseada em módulos
- Programação reativa com RxJS
- Boas práticas de UX/UI
- Performance e otimização

** Ecosystem DevFreela:**
- **Backend API**: [DevFreela](https://github.com/luanheuripedes/DevFreela)
- **Microsserviço**: [DevFreelaMicrosservico](https://github.com/luanheuripedes/DevFreelaMicrosservico)
