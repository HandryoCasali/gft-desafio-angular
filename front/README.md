# PubSimpsons

🚀 **Para rodar o projeto faça o clone deste repositório.**

---

        npm install

Rode o comando acima para instalar as dependencias do projeto;

Após isso rode o comando abaixo: 

    ng serve

## Sistema para gerenciamento do PubSimpsons
**🔧 Tecnologias utilizadas 🔧**
- Angular 15.0.4;
- Node 18.12.1;
- Npm 8.19.2;
- Bootstrap;
- Vs code;
---

## 🙍‍♂️ Usuários previamente cadastrados:
- **ADM**:
    - **login**: arcenio@gmail.com 
    - **senha**: arce123
- **Usuario**:
    - **login**: manoel@gmail.com 
    - **senha**: manoel123
    
    É possível cadastrar novos usuários e torná-los ADM's.
    (Para tornar um usuario adm é necessário estar logado como adm).
---

## 🌎 Funcionalidades
-  O Front conta com um sistema de login, em que o acesso do painel admnistrativo é habilitado apenas para os adms. As paginas principais podem ser acessadas sem estar logado, porém para se agendar em um evento é necessário login no sistema;
---

## 🎲 Banco de dados
- Sistema já está previamente populado de exemplos.
- **Estou utilizando uma conta separada no atlas**:
  - String de conexão: 
        
        `mongodb+srv://${user}:${password}@${database}.lcpo1if.mongodb.net/?retryWrites=true&w=majority`
  - variaveis de ambiente: 

        user: handryocasali
        password: handryocasali
        database: cluster0

- É necessário mudar as variaveis de ambiente na api principal;
- É possível também, utilizar a conta do atlas padrão que já estava na api;
---


## ***Melhorias***

- [x] Responsividade, (falta melhorar as telas pra celular);
- [ ] Filtragem nas listas;
- [ ] Upload de arquivo de imagem em vez de url;
- [ ] Melhorar o design e usabilidade do sistema;
