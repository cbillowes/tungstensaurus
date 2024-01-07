# Abstract Factory

The Abstract Factory pattern is like going to a restaurant that serves meals from different cuisines,
and each cuisine has its own chef and menu.
You don't worry about how each dish is made; you just order from the chef of the cuisine you want,
ensuring that all the dishes you get are from the same style.

## Definition

Provides an interface for creating families of related or dependent objects without specifying their concrete classes.
It defines a set of interfaces for creating various distinct but related products, such as objects belonging to the same product family.
The Abstract Factory Pattern allows a client to create objects without specifying their concrete classes, ensuring that the created
objects are compatible and work together.
This pattern facilitates the creation of entire families of objects while promoting consistency and avoiding the need to specify
individual class names.

## Considerations

Make sure each cuisine (concrete factory) creates dishes (concrete products) that work well together,
maintaining a consistent style across the entire meal.

## Benefits

It allows you to easily switch between different sets of related objects, ensuring they are compatible and follow the same theme,
just like ordering from a specific cuisine in the restaurant.

## Tradeoffs

While providing a convenient way to switch between families of objects, adding a new cuisine (introducing a new concrete factory) may require changing the client code, potentially adding complexity.

## Practical Use Case

**GUI Frameworks:**\
In graphical user interface (GUI) frameworks, different platforms (Windows, Linux, macOS) may require unique implementations for buttons, windows, and other UI components. The Abstract Factory Pattern can be used to create families of related UI components that are tailored to each platform.

## Code Example

```python
# Abstract Factory interface
class CuisineFactory:
    def create_appetizer(self):
        pass

    def create_main_course(self):
        pass

    def create_dessert(self):
        pass

# Concrete factory for Italian cuisine
class ItalianCuisineFactory(CuisineFactory):
    def create_appetizer(self):
        return Bruschetta()

    def create_main_course(self):
        return Pasta()

    def create_dessert(self):
        return Tiramisu()

# Concrete products for Italian cuisine
class Bruschetta:
    def serve(self):
        print("Bruschetta is served.")

class Pasta:
    def serve(self):
        print("Pasta is served.")

class Tiramisu:
    def serve(self):
        print("Tiramisu is served.")

# Example usage
italian_factory = ItalianCuisineFactory()
appetizer = italian_factory.create_appetizer()
main_course = italian_factory.create_main_course()
dessert = italian_factory.create_dessert()

appetizer.serve()
main_course.serve()
dessert.serve()
```

In this example, the `CuisineFactory` is the abstract factory, `ItalianCuisineFactory` is the concrete factory for Italian cuisine, and `Bruschetta`, `Pasta`, and `Tiramisu` are concrete products representing dishes. The client can easily switch between different cuisines without worrying about the specific details of each dish.
