import {Task, PerformsTask, Click, Sleep} from "thekla-core";
import {Calculators}               from "../pgo/Calculators";
import {TypeIn}                    from "./TypeIn";

export class Subtract extends Task{
    private theMinuend: number = 0;

    performAs(actor: PerformsTask): Promise<void> {
        return actor.attemptsTo(
            TypeIn.theNumber(this.theMinuend),
            Sleep.for(1000),
            Click.on(Calculators.ADD_BUTTON),
            TypeIn.theNumber(this.theSubtrahend),
            Sleep.for(1000),
            Click.on(Calculators.RESULT_BUTTON)
        )
    }

    public static number(subtrahend: number): Subtract {
        return new Subtract(subtrahend)
    }

    public from(minuend: number): Subtract {
        this.theMinuend = minuend;
        return this;
    }

    private constructor(private theSubtrahend: number) {
        super();
    }
}