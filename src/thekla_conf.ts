import {TheklaConfig} from "thekla/dist";

export const config: TheklaConfig = {
    specs: ["features/**/*.feature"],

    seleniumConfig: {
        seleniumServerAddress: "http://localhost:4445/wd/hub",
    },

    capabilities: [{
        browserName: "chrome",
    }],

    testFramework: {
        frameworkName: "cucumber",
        cucumberOptions: {
            require: ["dist/step_definitions/**/*.js"],
            tags: ["@Focus"]
        }

    }
};