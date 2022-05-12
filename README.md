# End2End Tests with Cypress.io

## Getting Started

1. Install >= [NodeJS v14](https://nodejs.org/dist/latest-v14.x/) (Recommendation: Install [NodeJS v16](https://nodejs.org/dist/latest-v16.x/))
2. Install PNPM as package manager, because it is faster and more stable

        npm install -g pnpm

3. optionally: Install shell tooling (on Windows OS) to become able to execute also shell scripts (for executing tests Unix-based)
4. You have to install the Node package `scripty` globally

        # with PNPM
        pnpm install -g scripty

5. You have to set write permissions to the `scripts` and `scripts-win` folders under project root

        sudo chmod -Rf 777 ./scripts/
        sudo chmod -Rf 777 ./scripts-win/

6. Sometimes you have some trouble on Unix based OS starting the tests because the scripty scripts under `/scripts` and `scripts-win` have the wrong endcoding for line endings. In that case you have to convert from DOS to UNIX. Therefore you can use the tool [dos2unix](http://dos2unix.sourceforge.net). First download the tool and install, after you can convert the specific files:

       # convert all scripty scripts in given folder
       dos2unix ./scripts/*
       dos2unix ./scripts-win/*

7. `pnpm install`

8. `pnpm clean`

9. Run your tests as described in the following chapters

       #### CYPRESS RUN ####
       # execute all cucumber tests
       pnpm run cy:run --reporter mocha-allure-reporter

       # execute only specific cucumber tests
       pnpm run cy:run --spec cypress/integration/features/webpage.feature --reporter mocha-allure-reporter

       # execute with @smoke tagged cucumber tests
       pnpm run cy:run --env tags=@smoke --reporter mocha-allure-reporter

10. Generate Cucumber reports

        # generate all cucumber reports
        pnpm run cucumber:report
