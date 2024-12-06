describe('Testes de API - Produtos', () => {
  
    
    describe('Listar Produtos', () => {
      it('Deve retornar todos os produtos cadastrados', () => {
        cy.request('GET', 'https://serverest.dev/produtos').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('quantidade');
          expect(response.body).to.have.property('produtos');
          expect(response.body.produtos).to.be.an('array');
        });
      });
    });
  });
  