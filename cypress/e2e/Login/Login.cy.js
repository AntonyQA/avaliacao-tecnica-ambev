describe('Testes de Login no Frontend', () => {
    const baseUrl = 'https://front.serverest.dev';
  
    beforeEach(() => {
      cy.visit(`${baseUrl}`); 
    });
  
    it('Deve realizar login com sucesso', () => {
      cy.get('input[name=email]').type('fulano@qa.com'); 
      cy.get('input[name=password]').type('teste'); 
      cy.get('button[type=submit]').click();
      cy.get('h1').should('be.visible'); 
    });
  
    it('Deve exibir erro para credenciais inválidas', () => {
      cy.get('input[name=email]').type('usuario@invalido.com'); 
      cy.get('input[name=password]').type('senhaerrada'); 
      cy.get('button[type=submit]').click();
      cy.get('.alert > :nth-child(2)').should('be.visible');
  });

  it('Deve Exbir erro para tentativa de logar com campos vazios', () => {
    cy.get('button[type=submit]').click(); 
    cy.get('.form > :nth-child(2)').should('be.visible');
    cy.get('.form > :nth-child(3)').should('be.visible');
});
});