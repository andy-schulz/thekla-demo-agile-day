import {When}     from "cucumber";
import {Add}      from "../../add/Add";
import {Sleep}    from "thekla-core";
import {Subtract} from "../../add/Subtract";

When(/(.*) subtracts number (.+) from (.+)/, {timeout: 25000}, function (
    actorName: string, subtrahend: number, minuend: number) {
    const world = this;

    const currentActor = world.currentActor;

    return currentActor.attemptsTo(
        Subtract.number(subtrahend).from(minuend),
    )
});

When(/(.*) adds the numbers (.+) and (.+)/, {timeout: 25000}, function (
    actorName: string, firstNumber: number, secondNumber: number) {
    const world = this;

    const currentActor = world.currentActor;

    return currentActor.attemptsTo(
        Add.number(firstNumber).to(secondNumber),
    )
});
