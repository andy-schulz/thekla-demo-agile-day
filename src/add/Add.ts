import {Task, PerformsTask, Click, Sleep} from "thekla-core";
import {Calculators}               from "../pgo/Calculators";
import {TypeIn}                    from "./TypeIn";

export class Add extends Task{
    private theSecondNumber: number = 0;

    performAs(actor: PerformsTask): Promise<void> {
        return actor.attemptsTo(
            TypeIn.theNumber(this.firstNumber),
            Sleep.for(1000),
            Click.on(Calculators.addButton),
            TypeIn.theNumber(this.theSecondNumber),
            Sleep.for(1000),
            Click.on(Calculators.resultButton)
        )
    }

    public static number(firstNumber: number): Add {
        return new Add(firstNumber)
    }

    public to(secondNumber: number): Add {
        this.theSecondNumber = secondNumber;
        return this;
    }

    private constructor(private firstNumber: number) {
        super();
    }
}