import {By, element} from "thekla-core";

export class Calculators {

    public static readonly RESULT_FIELD =
            element(By.css("div.component-display"))
                .called("the result field");

    public static readonly SIGNATURE_BUTTON =
        element(By.cssContainingText("button", "+/-"))
        .called(`the signature button`);
    
    public static readonly ADD_BUTTON =
            element(By.cssContainingText("div.component-button.orange","+"))
                .called("the calculators add (+) button");

    public static readonly SUBTRACT_BUTTON =
        element(By.cssContainingText("div.component-button.orange","-"))
            .called("the calculators subtract (-) button");


    public static readonly RESULT_BUTTON =
        element(By.cssContainingText("div.component-button.orange", "="))
            .called("the calculators result (=) button");

    public static readonly NUMBER_BUTTON = (theNumber: string) => {

        if(theNumber == "-") {
            return Calculators.SIGNATURE_BUTTON;
        }

        return element(By.cssContainingText("button", theNumber))
            .called(`the number ${theNumber} button`);
    }
}