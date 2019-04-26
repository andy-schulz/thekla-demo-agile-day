## What is the Screenplay Pattern?

---
### How does a simple test look like?
````typescript
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
)
````

@[1](Create an actor)
@[3](Give an ability to the actor)
@[5-16](The actor executes interactions)
@[17-18](The actor asks a question)

---

### How do we deal with varying number sizes?

````typescript
const Bernhard = Actor.named("Bernhard");

Bernhard.can(BrowseTheWeb.using(aBrowser));

return Bernhard.attemptsTo(
    Navigate.to("http://localhost:3000"),

    // Click.on(Calculators.SIGNATURE_BUTTON("-")),
    // Click.on(Calculators.NUMBER_BUTTON("3")),
    // Click.on(Calculators.NUMBER_BUTTON("0")),
    TypeIn.theNumber(-30),

    Click.on(Calculators.ADD_BUTTON),

    TypeIn.theNumber(5),

    Click.on(Calculators.RESULT_BUTTON),

    See.if(Text.of(Calculators.RESULT_FIELD))
        .is(strictEqualTo("-25")),
)
````
@[8-10](With increased number variations the clicks are changing!)
@[8-11](Create a task out of interactions)

---

### How does a task look like?

````typescript
export class TypeIn extends Task {
    private theNumberArray: string[];

    performAs(actor: PerformsTask): Promise<void> {
        return actor.attemptsTo(
            ...this.clickOnTheNumbersSingleDigits()
        )
    }

    private clickOnTheNumbersSingleDigits() {...}

    public static theNumber(theNumber: number) {...}

    private constructor(theNumber: number) {...}
}
````

---

### Can we compose a task out of tasks?

````typescript
const Bernhard = Actor.named("Bernhard");

Bernhard.can(BrowseTheWeb.using(aBrowser));

return Bernhard.attemptsTo(
    Navigate.to("http://localhost:3000"),
    
    Add.number(10).to(7),

    See.if(Text.of(Calculators.RESULT_FIELD))
        .is(strictEqualTo("17"))
)
````

---

### Yes we can!

````typescript
export class Add extends Task{
    private theSecondNumber: number = 0;

    performAs(actor: PerformsTask): Promise<void> {
        return actor.attemptsTo(
            TypeIn.theNumber(this.theFirstNumber),
            Click.on(Calculators.ADD_BUTTON),
            TypeIn.theNumber(this.theSecondNumber),
            Click.on(Calculators.RESULT_BUTTON)
        )
    }

    public static number(firstNumber: number): Add {...}

    public to(secondNumber: number): Add {...}

    private constructor(private theFirstNumber: number) {...}
}
````

@[4-11](a task can consist of interactions and tasks)


### What are the main artifacts of the Screenplay Pattern?

````typescript
/**
* ACTOR
*   | ------ uses ----> ABILITY 
*   |                        \
*   |                      enables
*   |                          \
*   |                       INTERACTIONS
*   |                           /
*   |                     made up of 
*   |                        /
*   | --- performs ----> TASKS
*   |
*   | --- asks ---> QUESTION
*/
````

@[1-2](Start with an actor!)
@[1-3](He can use an ability (eg browser the web))
@[1-7](The ability enables him to interact with the system (eg a browser))
@[1-11](Interactions can be combined to tasks)
@[1-14](The actor can ask questions of the systems state)


