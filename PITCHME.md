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

---

````typescript
const Bernhard = Actor.named("Bernhard");

Bernhard.can(BrowseTheWeb.using(aBrowser));

return Bernhard.attemptsTo(
    Navigate.to("http://localhost:3000"),

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

@[8-10](Create a task out of interactions)

---

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
*   | --- asks ---> | QUESTION |
*/
````

@[1-2](Start with an actor!)
@[1-3](He can use an ability - e.g. browser the web!)
@[1-7](The ability enables him to interact with the system - e.g. a browser)
@[1-11](Interactions can be combined to tasks)
@[1-14](The actor can ask questions of the systems state)


