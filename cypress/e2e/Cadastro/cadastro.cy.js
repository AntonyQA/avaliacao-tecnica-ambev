describe('Cadastro de usuario', () => {
    const baseUrl = 'https://front.serverest.dev';
  
    beforeEach(() => {
      cy.visit(`${baseUrl}`); 
    });
    it('Deve permitir cadastro de novo usuário e login subsequente', () => {
        cy.get('[data-testid="cadastrar"]').click(); 
        cy.get('input[name=nome]').type('Novo Usuário');
        cy.get('input[name=email]').type(`novo.usuario${Date.now()}@teste.com`); 
        cy.get('input[name=password]').type('novasenha123');
        cy.get('button[type=submit]').click();
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        cy.get('[data-testid="logout"]').click();
    });
});