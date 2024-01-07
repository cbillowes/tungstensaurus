# Singleton

The Factory Pattern is like ordering a customizable pizza from your favorite pizza place,
where you get to pick the toppings without worrying about how the pizza is actually made.
It simplifies the process of creating different types of objects by providing a central way to order them,
much like placing an order at a restaurant.

## Definition

The Factory Pattern is a design pattern that provides an interface for creating objects but
lets subclasses alter the type of objects that will be created.
It involves defining an interface (usually in an abstract class) with a method that creates objects,
and the specific classes (subclasses) implement this method to produce objects with varying behaviors.
This pattern promotes loose coupling between client code and the actual classes being
instantiated, allowing flexibility in object creation.

## Considerations

Ensure the factory method or interface is appropriately designed to handle various object creation scenarios,
making it versatile for different use cases.

## Benefits

The Factory Pattern simplifies object creation by centralizing the process and allowing flexibility in choosing object types.
It promotes a clean separation between client code and object creation, making the code more maintainable.
The pattern is particularly useful when you need to delegate the responsibility of object instantiation to subclasses.

## Tradeoffs

While providing flexibility, the Factory Pattern may introduce additional classes, leading to a more extensive class hierarchy.
This could potentially complicate the overall system design.
Additionally, modifying or extending the factory hierarchy might require changes in the client code.

## Practical Use Case

**Logger Instance:**\
In a logging system, using the Singleton Pattern ensures that there is only one instance of the logger throughout the application. This centralizes logging functionality and provides a single point of control for managing log entries.

## Code Example

```python
from abc import ABC, abstractmethod

# Factory interface
class AnimalFactory(ABC):
    @abstractmethod
    def create_animal(self):
        pass

# Concrete factories
class DogFactory(AnimalFactory):
    def create_animal(self):
        return Dog()

class CatFactory(AnimalFactory):
    def create_animal(self):
        return Cat()

# Products
class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

# Example usage
dog_factory = DogFactory()
cat_factory = CatFactory()

dog = dog_factory.create_animal()
cat = cat_factory.create_animal()

print(dog.speak())  # Output: Woof!
print(cat.speak())  # Output: Meow!
```

In this example, the `AnimalFactory` is the factory interface, and `DogFactory` and `CatFactory` are concrete factories. The client code can create different animals using these factories without knowing the specifics of the `Dog` or `Cat` classes.
