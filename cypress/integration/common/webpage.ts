import { Given, Then, When, attach } from "@badeball/cypress-cucumber-preprocessor";

When(/^the user opens the webpage "([^"]*)?"$/, (url: string) => {
    cy.visit(url);
});

When(/^the Google search field is visible$/, () => {
    cy.get('form[action="/search"]').should('be.visible');
});

