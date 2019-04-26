# What is the Screenplay Pattern

---
## How does a test look like?
````typescript
const Bernhard = Actor.named("Bernhard");

Bernhard.can(BrowseTheWeb.using(aBrowser));

return Bernhard.attemptsTo(
    Navigate.to("http://localhost:3000"),
    
    Click.on(Calculators.numberButton("3")),
    Click.on(Calculators.numberButton("0")),

    Click.on(Calculators.addButton),

    Click.on(Calculators.numberButton("5")),

    Click.on(Calculators.resultButton),

    See.if(Text.of(Calculators.resultField))
        .is(strictEqualTo("35")),
)
````

@[1](Create an actor)
@[3](Give an ability to the actor)
@[5-16](The actor executes interactions)
@[17-18](The actor asks a question)

---

````typescript
const Bernhard = Actor.named("Bernhard");

Bernhard.can(BrowseTheWeb.using(aBrowser));

return Bernhard.attemptsTo(
    Navigate.to("http://localhost:3000"),

    // Click.on(Calculators.numberButton("3")),
    // Click.on(Calculators.numberButton("0")),
    TypeIn.theNumber(-30),

    Click.on(Calculators.addButton),

    TypeIn.theNumber(5),

    Click.on(Calculators.resultButton),

    See.if(Text.of(Calculators.resultField))
        .is(strictEqualTo("-25")),
)
````

@[7](Create a task out of interactions)
---
# What are the main artifacts of the Screenplay Pattern?
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
*   | --- asks ---> | QUESTION |
*/
````


