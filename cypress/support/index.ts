/* eslint-disable no-undef */
require('cypress-plugin-tab');

// ***********************************************************
// This example support/index.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.ts using ES2015 syntax:
require('cypress-xpath');
const registerCypressGrep = require('cypress-grep');
registerCypressGrep();

import './commands';
//import addContext from "mochawesome/addContext";
import '@cypress/code-coverage/support';
import '@shelex/cypress-allure-plugin';

beforeEach(() => {
    // Disable AB Tasty, which tracks the users activity on the page
    localStorage.setItem('disable-ab-tasty', '1');
});

/*
afterEach(() => {
    cy.log('1');
    const screenshotsFolder = Cypress.config('screenshotsFolder');
    cy.log('2');
    //if (window.cucumberJson?.generate) {
    const testState = window.testState;
    cy.log('3');
    const stepResult =
        testState.runTests[testState.currentScenario.name][
            testState.currentStep
        ];
    cy.log('4');
    if (stepResult?.status === 'failed') {
        const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
        cy.readFile(
            `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
            'base64'
        ).then((imgData) => {
            stepResult.attachment = {
                data: imgData,
                media: { type: 'image/png' },
                index: testState.currentStep,
                testCase: testState.formatTestCase(testState.currentScenario),
            };
        });
    }
    //}
});

 */

//Cypress.on('uncaught:exception', () => false);
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

/*
Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
        addContext({ test }, screenshot.replace('|', '').replace('  ', ' '));
    }
});
 */

// Alternatively you can use CommonJS syntax:
// require('./commands')
