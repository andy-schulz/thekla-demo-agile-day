import {Given}                               from "cucumber";
import {Actor, BrowseTheWeb, RunningBrowser, SeleniumConfig, DesiredCapabilities, Navigate} from "thekla-core";
import {TheklaConfig}                        from "thekla/dist";

declare const thekla : any;
const config: TheklaConfig = thekla.config;

Given(/(.*) is using a WebCalculator/, {timeout: 15000}, function (
    actorName : string) {
    const world = this;

    const aBrowser = RunningBrowser.startedOn(config.seleniumConfig as SeleniumConfig)
        .withDesiredCapability((config.capabilities as DesiredCapabilities[])[0]);

    const currentActor = Actor.named(actorName);

    // save the actor for subsequent steps
    world.currentActor = currentActor;

    currentActor.can(BrowseTheWeb.using(aBrowser));

    return currentActor.attemptsTo(
        Navigate.to(`http://localhost:3000`)
    )
});