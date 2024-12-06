describe('Testes da API Login', () => {
    const apiUrl = 'https://serverest.dev';
  
    it('Deve realizar login via API com sucesso', () => {
      cy.request('POST', `${apiUrl}/login`, {
        email: 'fulano@qa.com', 
        password: 'teste',
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('authorization'); 
      });
    });
});
  
    