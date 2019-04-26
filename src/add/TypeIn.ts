import {Task, PerformsTask, Click, Activity} from "thekla-core";
import {Calculators}               from "../pgo/Calculators";

export class TypeIn extends Task {

    performAs(actor: PerformsTask): Promise<void> {
        return actor.attemptsTo(
            ...this.clickOnTheNumbersSingleDigits()
        )
    }

    private theNumberArray: string[];

    private clickOnTheNumbersSingleDigits() {
        let shift: boolean = false;

        const activities: Activity[] = this.theNumberArray.map((theSingleNumber) => {
            if(theSingleNumber == "-") {
                shift = true;
            }
            return Click.on(Calculators.numberButton(theSingleNumber))
        });

        if(shift)
            activities.push(activities.shift() as Activity);

        return activities;
    }

    public static theNumber(theNumber: number) {
        return new TypeIn(theNumber);
    }

    private constructor(theNumber: number) {
        super();
        this.theNumberArray = theNumber.toString().split('');
    }
}