describe('Verificar elementos da homepage', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });
    
    // Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.
    it('Visita a homepage e verifica se o title com o texto "AdoPet" está visível', () => {
        cy.title().should('eq', 'AdoPet');
    });

    // Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.
    it('Visita a homepage e verifica se o texto "Quem ama adota!" está visível', () => {
        cy.contains('Quem ama adota!').should('be.visible');
    });

    // Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.
    it('Visita a homepage e verifica se o texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" está visível', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    });
});






