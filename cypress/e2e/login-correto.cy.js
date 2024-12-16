describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.login('ana@email.com', 'Senha123')
    });
});

describe('Login correto fluxo alternativo', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });

    it('Acessa a homepage, clica no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.', () => {
        cy.get('.header__message').click();
        cy.login('ana@email.com', 'Senha123')
    });
});