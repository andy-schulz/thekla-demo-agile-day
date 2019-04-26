import {TheklaConfig} from "thekla/dist";

export const config: TheklaConfig = {
    specs: ["dist/test/**/*spec.js"],

    seleniumConfig: {
        seleniumServerAddress: "http://localhost:4445/wd/hub",
    },

    capabilities: [{
        browserName: "chrome",
        proxy: {
            type: "direct"
        }

    }],

    testFramework: {
        frameworkName: "jasmine",
        jasmineOptions: {
            defaultTimeoutInterval: 20000
        }
    }
};