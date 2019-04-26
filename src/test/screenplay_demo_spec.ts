import {
    RunningBrowser,
    SeleniumConfig,
    DesiredCapabilities,
    Actor,
    BrowseTheWeb,
    Navigate,
    Click, See, Text, strictEqualTo, Sleep
}                     from "thekla-core";
import {TheklaConfig} from "thekla/dist";
import {Add}          from "../add/Add";
import {TypeIn}       from "../add/TypeIn";
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
            Click.on(Calculators.NUMBER_BUTTON("3")),
            Click.on(Calculators.NUMBER_BUTTON("0")),

            Click.on(Calculators.ADD_BUTTON),

            Click.on(Calculators.NUMBER_BUTTON("5")),

            Click.on(Calculators.RESULT_BUTTON),

            See.if(Text.of(Calculators.RESULT_FIELD))
                .is(strictEqualTo("35")),

            Sleep.for(2000)
        )

    });

    it('two numbers should  - (test case id: )', () => {

        const Bernhard = Actor.named("Bernhard");

        Bernhard.can(BrowseTheWeb.using(aBrowser));

        return Bernhard.attemptsTo(
            Navigate.to("http://localhost:3000"),

            TypeIn.theNumber(-30),

            Click.on(Calculators.ADD_BUTTON),

            TypeIn.theNumber(5),

            Click.on(Calculators.RESULT_BUTTON),

            See.if(Text.of(Calculators.RESULT_FIELD))
                .is(strictEqualTo("-25")),

            Sleep.for(2000)
        )

    });

    fit('two numbers should  - (test case id: )', () => {

        const Bernhard = Actor.named("Bernhard");

        Bernhard.can(BrowseTheWeb.using(aBrowser));

        return Bernhard.attemptsTo(
            Navigate.to("http://localhost:3000"),
            Add.number(10).to(7),

            See.if(Text.of(Calculators.RESULT_FIELD))
                .is(strictEqualTo("17")),

            Sleep.for(2000)
        )

    });

    afterAll(() => {
        return RunningBrowser.cleanup();
    })
});