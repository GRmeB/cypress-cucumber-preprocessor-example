const report = require('multiple-cucumber-html-reporter');
report.generate({
    jsonDir: 'cypress/reports/cucumber/cucumber-json', // ** Path of .json file **//
    reportPath: './cypress/reports/cucumber/cucumber-html',
});
