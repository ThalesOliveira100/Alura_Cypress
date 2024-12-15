// Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
describe('Clicar no botão "Ver pets disponíveis para adoção"', () => {
    it('Acessar página principal e clicar no botão "Ver pets disponíveis para adoção"', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', "Ver pets disponíveis para adoção").click();
    })
});


// Visite a página de principal do AdoPet e teste os botões header;
describe('Testar os botões headers', () => {
    it('Acessar a página principal e testar os botões headers', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('a[class="header__home"]').click();
        cy.get('a[class="header__message"]').click();
    })
});


// Visite a página de /login do Adopet;
describe("Acessar página de login", () => {
    it('Acessar página de login', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })
});


// Visite a página de /home do Adopet;
describe("Acessar homepage", () => {
    it('Acessar homepage', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })
});


// Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.
describe("Clicar no botão 'Falar com responsável' da homepage", () => {
    it('Acessar homepage', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.contains('Falar com responsável').click();
    })
});