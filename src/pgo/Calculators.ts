import {By, element} from "thekla-core";

export class Calculators {

    public static readonly resultField =
            element(By.css("div.component-display"))
                .called("the resultField field");

    public static readonly signatureButton =
        element(By.cssContainingText("button", "+/-"))
        .called(`the signature button`);
    
    public static readonly addButton =
            element(By.cssContainingText("div.component-button.orange","+"))
                .called("the calculators add (+) button");

    public static readonly subtractButton =
        element(By.cssContainingText("div.component-button.orange","-"))
            .called("the calculators subtract (-) button");


    public static readonly resultButton =
        element(By.cssContainingText("div.component-button.orange", "="))
            .called("the calculators result (=) button");

    public static readonly numberButton = (theNumber: string) => {

        if(theNumber == "-") {
            return Calculators.signatureButton;
        }

        return element(By.cssContainingText("button", theNumber))
            .called(`the number ${theNumber} button`);
    }
}