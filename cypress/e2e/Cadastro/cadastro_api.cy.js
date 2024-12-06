describe('Testes da API cadastro', () => {
    const apiUrl = 'https://serverest.dev';

it('Deve obter lista de usuários cadastrados', () => {
    cy.request('GET', `${apiUrl}/usuarios`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('usuarios');
      expect(response.body.usuarios).to.be.an('array'); 
    });
  });
  it('Deve cadastrar um novo usuário com sucesso', () => {
      const novoUsuario = {
        nome: 'Usuário Teste',
        email: `usuario.teste${Date.now()}@teste.com`, 
        password: 'senha123',
        administrador: 'true',
      };
  
      cy.request('POST', `${apiUrl}/usuarios`, novoUsuario).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id'); // Valida que o ID foi gerado
      });
    });
  });