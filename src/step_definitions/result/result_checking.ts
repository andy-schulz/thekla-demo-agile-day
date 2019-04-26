import {Then}        from "cucumber";
import {See, strictEqualTo, Text, Sleep}         from "thekla-core";
import {Calculators} from "../../pgo/Calculators";

Then(/(.*) should get the result (.+)/,
    function (actorName: string, result: number) {
        const world = this;

        const currentActor = world.currentActor;

        return currentActor.attemptsTo(
            See.if(Text.of(Calculators.resultField))
                .is(strictEqualTo(`${result}`)),
            Sleep.for(1000)
        );
    });