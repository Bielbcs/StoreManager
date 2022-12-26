# 🏪 Projeto Store Manager 🏪

  <summary>
    <h3> Descrição 📝</h3>
  </summary>
  Projeto feito durante o curso da <a href="https://www.betrybe.com/">Trybe</a> para testar os conhecimentos adquiridos.
  </br>
  Aplicação em Node.js de um CRUD completo de sistema de gerenciamento de vendas utiliazndo MySQL como banco de dados </br>
  </br>
  <table>
    <tr>
      <td>Tecnologias Utilizadas</td>
    </tr>
    <tr>
      <td>
        <ul>
          <li>NodeJs</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>Sequelize</li>
          <li>Docker</li>
          <li>MySQL</li>
          <li>Mocha</li>
          <li>Sinnon</li>
          <li>Chai</li>
        </ul>
      </td>
    </tr>
  </table>
  
  <summary><h3>Projeto 🏆</h3></summary>
  
  #### 1. Rotas dos produtos:
   - Cadastra um novo produto - POST `/products`.
   - Lista todos os produtos ou apenas um especifico por Id - GET `/products` ou `/products/:id`.
   - Atualiza um produto - PUT `/products/:id`.
   - Apaga um produto - DELETE `/products/:id`.

  ### 2. Rotas das vendas:
   - Cadastra uma venda - POST `/sales`.
   - Lista todas as vendas ou apenas uma especifica por Id: GET `/sales` ou `/sales/:id`.

  ### 3. Testes:
   - Cobertura de testes com Mocha, Chai e Sinon.


  <summary><h3>Como rodar localmente 👨‍💻</h3></summary></br>
  
  ⚠️ Necessário Docker e Docker-Compose ⚠️

1) Clone o repositório

```bash
$ git clone git@github.com:Bielbcs/StoreManager.git
```

2) Suba os containers

```bash
$ docker-compose up -d
```

3) Entre no container

```bash
$ docker exec -it store_manager bash
```

4) Instale as dependências

```bash
$ npm install
```

5) Crie e popule o banco

```bash
$ npm run migration
$ npm run seed
```

6) Inicie a aplicação

```bash
$ npm run debug
```
 
### 📞 Entre em contato 📞
 
 <div align="center" margin="50px">
	  <a href = "mailto:bielcotrimsv@gmail.com"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
	<a href="https://github.com/Bielbcs" target="_blank"><img src="https://img.shields.io/badge/-GitHub-%23333?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
  	<a href="https://www.linkedin.com/in/gabriel-bernardo-541661220/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
 
