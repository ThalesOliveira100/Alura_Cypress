describe('Verificar exibição das imagens de pets', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Deve exibir as imagens dos pets disponíveis para adoção ao usuário não logado', () => {
        cy.get('.button').click();
        cy.get('.cards').should('be.visible');
    });

    it('Deve exibir as imagens dos pets disponíveis para adoção ao usuário logado', () => {
        cy.get('[data-test="login-button"]').click();
        cy.login('ana@email.com', 'Senha123');
        cy.get('.cards').should('be.visible');
    });
});