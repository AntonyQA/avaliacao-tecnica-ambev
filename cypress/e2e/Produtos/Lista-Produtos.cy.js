describe('Navegação para a página de Listar Produtos', () => {
    it('Deve acessar a página Listar Produtos com sucesso', () => {
      cy.visit('https://front.serverest.dev');
      cy.get('input[name="email"]').type('fulano@qa.com');
      cy.get('input[name="password"]').type('teste');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/admin');
      cy.contains('Listar Produtos').click();
      cy.url().should('include', '/admin/listarprodutos');
      cy.contains('Lista dos Produtos').should('be.visible');
    });
    
      describe('Excluir um produto', () => {
        it('Deve excluir um produto da lista com sucesso', () => {
          cy.visit('https://front.serverest.dev');
          cy.get('input[name="email"]').type('fulano@qa.com');
          cy.get('input[name="password"]').type('teste');
          cy.get('button[type="submit"]').click();
          cy.contains('Listar Produtos').click();
          cy.get('table tbody tr').first().find('button:contains("Excluir")').click();
        });
      });

      describe('Editar um produto', () => {
        it('Deve editar as informações de um produto com sucesso', () => {
          cy.visit('https://front.serverest.dev');
          cy.get('input[name="email"]').type('fulano@qa.com');
          cy.get('input[name="password"]').type('teste');
          cy.get('button[type="submit"]').click();
          cy.contains('Listar Produtos').click();
          cy.get('table tbody tr').first().find('button:contains("Editar")').click();
      
        });
      });
            
  });
  