import { usuarios } from '../fixtures/usuarios.json'

describe('Página de cadastro', () => {
    usuarios.forEach(usuario => {
        it(`Deve logar corretamente na plataforma com o usuário ${usuario.name}`, () => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/login');
            cy.login(usuario.email, usuario.password);
            cy.get('.header__user').click();
            cy.get('.button').click();
            cy.get('#fotoPerfil').should('be.visible');
        })

    })
});