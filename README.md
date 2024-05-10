# Chatbot de Auxílio ao RS

Este projeto é um chatbot desenvolvido em React que utiliza a API do Google Generative AI para responder a perguntas relacionadas a como ajudar as vítimas da tragédia no Rio Grande do Sul.

![GIF do projeto funcionando](/screenshots/home.gif)

## Funcionalidades

- Interface de chat interativa.
- Respostas geradas pelo modelo de IA `gemini-1.0-pro` do Google Generative AI.
- Suporte para perguntas e respostas em tempo real.
- Carregamento assíncrono de mensagens.

## Tecnologias Utilizadas

- React
- Google Generative AI
- CSS para estilização

## Instalação

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/Danielmadr/chatbot-auxilio-rs
```

2. Navegue até o diretório do projeto:
   
```bash
cd chatbot-auxilio-rs
```

3. Instale as dependências:

```bash
npm install
```

4. Adicione sua chave da API no arquivo `App.jsx`:
```jsx
const API_KEY = "sua_chave_da_api_aqui";
```

5. Inicie o servidor de desenvolvimento:

```bash
npm start
```

##Segurança

Este projeto é um protótipo e realiza acesso direto à API via frontend, o que não é seguro devido à exposição da chave da API. Para um ambiente de produção, é recomendado o desenvolvimento de uma API REST que faça o acesso à API do Google Generative AI e retorne a resposta, mantendo a chave da API protegida no backend.

## Uso

Após iniciar o aplicativo, você pode interagir com o chatbot digitando perguntas na caixa de entrada e enviando-as. O chatbot responderá com informações sobre como ajudar as vítimas das enchentes no Rio Grande do Sul.


## Contribuições

Contribuições são sempre bem-vindas!

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato.

---

Desenvolvido por Daniel Martins de Andrade
