---
title: Interface Segregation
sidebar_position: 4
---

# Interface Segregation Principle (ISP)

> A class should not be forced to implement interfaces it does not use, and clients should not be forced to depend on interfaces they do not use.

If a class doesn't need certain methods from an interface, it shouldn't be forced to implement them. Likewise, if a part of the code only uses a subset of methods from an interface, it shouldn't be burdened with unnecessary functionalities.

## Guidelines

- **Granular Interfaces:**\
  Use ISP when designing interfaces with a focus on granularity, ensuring that each interface represents a specific, cohesive set of functionalities.

- **Avoiding Fat Interfaces:**\
  Apply ISP when you want to avoid creating "fat" interfaces with a large number of methods, especially when implementing classes may not need all of them.

- **Client-Specific Interfaces:**\
  Use ISP when designing interfaces tailored to specific clients or components, allowing each to depend only on the methods they require.

- **Maintainability and Scalability:**\
  Apply ISP to enhance maintainability and scalability by avoiding unnecessary dependencies and ensuring that changes to one part of the system do not affect unrelated components.

## Considerations

- **Interface Cohesion:**\
  Strive for high cohesion within interfaces, grouping related methods together. This ensures that implementing classes find the interface meaningful and usable.

- **Avoiding "One-Size-Fits-All":**\
  Be cautious about creating generic interfaces that try to cater to every possible use case. Such interfaces may violate ISP and lead to unnecessary complexity.

- **Client-Specific Interfaces:**\
  Consider the specific needs of clients or components when designing interfaces. Customizing interfaces for different clients can contribute to a more modular and maintainable design.

## Benefits

- **Reduced Dependencies:**\
  ISP reduces dependencies by allowing classes to depend only on the methods they need. This results in more modular and loosely coupled systems.

- **Enhanced Readability:**\
  Interfaces designed according to ISP are more readable and focused. Implementing classes and clients can easily understand and use the specific methods relevant to their context.

- **Easier Maintenance:**\
  Changes to interfaces have a localized impact, making maintenance easier. Modifying or extending an interface does not affect classes that don't depend on the added methods.

## Trade-offs

- **Increased Number of Interfaces:**\
  Following ISP might lead to an increased number of interfaces, potentially impacting the readability of the code. Striking the right balance is crucial.

- **Interface Evolution:**\
  Evolving interfaces may require careful consideration, as adding methods to an existing interface can affect multiple clients. This should be managed thoughtfully.

- **Development Time:**\
  The upfront design effort to create client-specific interfaces might increase development time initially. However, the long-term benefits in terms of maintainability often outweigh this trade-off.

## Code Example

```python
# Interfaces adhering to ISP

# ISP-compliant interface for flying birds
class Flyable:
    def fly(self):
        pass

# ISP-compliant interface for swimming birds
class Swimmable:
    def swim(self):
        pass

# Classes implementing specific interfaces

class Sparrow(Flyable):
    def fly(self):
        print("Sparrow flying")

class Penguin(Swimmable):
    def swim(self):
        print("Penguin swimming")

# Function using ISP-compliant objects
def perform_flight(bird):
    if isinstance(bird, Flyable):
        bird.fly()

def perform_swim(bird):
    if isinstance(bird, Swimmable):
        bird.swim()

# Usage of ISP
sparrow = Sparrow()
penguin = Penguin()

perform_flight(sparrow)  # Works as expected
perform_swim(penguin)    # Works as expected
```

In this example, the `Flyable` and `Swimmable` interfaces adhere to the Interface Segregation Principle. The `Sparrow` and `Penguin` classes implement only the interfaces that are relevant to their functionalities. The client code (`perform_flight` and `perform_swim` functions) uses these interfaces to perform specific actions without unnecessary dependencies.
