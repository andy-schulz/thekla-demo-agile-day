import {
    RunningBrowser,
    SeleniumConfig,
    DesiredCapabilities,
    Actor,
    BrowseTheWeb,
    Navigate,
    Click, See, Text, strictEqualTo, Sleep
} from "thekla-core";
import {TheklaConfig} from "thekla/dist";
import {Calculators}  from "../pgo/Calculators";
declare const thekla : any;
const config: TheklaConfig = thekla.config;

describe('Adding', () => {
    const aBrowser = RunningBrowser
        .startedOn(config.seleniumConfig as SeleniumConfig)
        .withDesiredCapability((config.capabilities as DesiredCapabilities[])[0]);

    it('two numbers should  - (test case id: )', () => {

        const Bernhard = Actor.named("Bernhard");

        Bernhard.can(BrowseTheWeb.using(aBrowser));

        return Bernhard.attemptsTo(
            Navigate.to("http://localhost:3000"),
            Click.on(Calculators.numberButton("3")),
            Click.on(Calculators.numberButton("0")),

            Click.on(Calculators.addButton),

            Click.on(Calculators.numberButton("5")),

            Click.on(Calculators.resultButton),

            See.if(Text.of(Calculators.resultField))
                .is(strictEqualTo("35")),

            Sleep.for(2000)
        )

    });
    
    afterAll(() => {
        return RunningBrowser.cleanup();
    })
});