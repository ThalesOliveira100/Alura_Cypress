describe('Falha no login do sistema', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos do login incorretamente e o sistema deve exibe mensagens de erro específicas para o e-mail e senha inseridos na página', () => {
        cy.get('[data-test="input-loginEmail"]').type('ana@emnail');
        cy.get('[data-test="input-loginPassword"]').type('senh');
        cy.get('[data-test="submit-button"]').click();
        cy.contains("Por favor, verifique o email digitado").should('be.visible')
        cy.contains("A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres").should('be.visible')
    });
});
