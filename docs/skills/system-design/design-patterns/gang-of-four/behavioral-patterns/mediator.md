# Mediator Pattern

The Mediator Pattern is like having a central coordinator at a party who helps guests communicate without directly talking to each other. It provides a way for objects to interact through a mediator, making complex systems more organized. Instead of every object communicating with every other object, they go through the mediator, simplifying the communication flow.

## Definition

The Mediator Pattern is a behavioral design pattern that defines an object (the mediator) that centralizes communication between a group of objects (colleagues). It promotes loose coupling by allowing objects to communicate without knowing each other's details. The mediator facilitates interactions, ensuring that changes in one object do not directly affect others, promoting a more maintainable and modular design.

## Considerations

Considerations for the Mediator Pattern include designing a clear protocol for communication between colleagues and ensuring that the mediator does not become a monolithic controller. It's essential to strike a balance between the centralization of communication and maintaining the autonomy of individual objects. Developers should be cautious not to over-complicate the mediator, as too much responsibility in one place can lead to a single point of failure.

## Benefits

The Mediator Pattern reduces the dependencies between objects by centralizing communication through the mediator, making the system more modular. It simplifies the maintenance of code by decoupling the interacting components, allowing changes in one part of the system without affecting others. This pattern enhances the flexibility of the system, as new objects can easily be added without altering existing code.

## Trade-offs

While the Mediator Pattern promotes loose coupling, it may introduce complexity in managing the mediator and coordinating communication. Overuse of the mediator can lead to a highly interconnected system, diminishing the benefits of loose coupling. Developers need to carefully design the mediator and ensure that its responsibilities align with the goals of the system.

## Practical Use-Case

**Air Traffic Control System:**\
In an air traffic control system, the Mediator Pattern can be applied to manage communication between various elements such as aircraft, ground control, and weather monitoring. The mediator (air traffic controller) centralizes communication, ensuring that changes in one area, like a change in flight path, are coordinated with other relevant entities.

## Code Example

```python
from abc import ABC, abstractmethod

# Mediator: Mediator
class Mediator(ABC):
    @abstractmethod
    def notify(self, colleague, event):
        pass

# Colleague: Colleague
class Colleague:
    def __init__(self, mediator):
        self.mediator = mediator

# Concrete Mediator: ConcreteMediator
class ConcreteMediator(Mediator):
    def __init__(self):
        self.colleague1 = Colleague(self)
        self.colleague2 = Colleague(self)

    def notify(self, colleague, event):
        if colleague == self.colleague1:
            print(f"Colleague1 receives event: {event}")
        elif colleague == self.colleague2:
            print(f"Colleague2 receives event: {event}")

# Concrete Colleague: ConcreteColleague
class ConcreteColleague(Colleague):
    def send_event(self, event):
        self.mediator.notify(self, event)

# Client Code
mediator = ConcreteMediator()
colleague1 = ConcreteColleague(mediator)
colleague2 = ConcreteColleague(mediator)

colleague1.send_event("Aircraft approaching")
colleague2.send_event("Weather alert")
```

In this example, the Mediator Pattern is demonstrated with `Mediator` as the abstract mediator, `ConcreteMediator` as the concrete mediator, `Colleague` as the abstract colleague, and `ConcreteColleague` as the concrete colleague. The client code uses the mediator to coordinate communication between colleagues, allowing them to interact without directly knowing each other.
