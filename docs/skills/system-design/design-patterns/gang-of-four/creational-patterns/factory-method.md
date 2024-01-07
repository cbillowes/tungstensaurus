# Factory Method

The Factory pattern is like ordering a pizza where you call the pizza place, choose your toppings,
and get a customized pizza delivered to your door.
Instead of making the pizza at home (complex object creation), you rely on the pizza place (factory) to handle the
details and give you the specific pizza you want.

## Definition

The Factory Method Pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows
subclasses to alter the type of objects that will be created.
It defines an interface for creating an object but leaves the choice of its type to the subclasses, thereby deferring instantiation to the subclasses. This pattern allows a class to delegate the responsibility of instantiating its objects to its subclasses,
promoting loose coupling and adhering to the Dependency Inversion Principle.

## Considerations

Ensure the factory can handle various orders, and the process of ordering and receiving a pizza is clear for customers.

## Benefits

It simplifies the pizza ordering process by letting the pizza place handle the creation details, and you can easily get different pizzas without worrying about how they are made.

## Tradeoffs

While convenient for ordering pizzas, if you want to change the way a specific type of pizza is made, you may need to modify the pizza place's process (factory).

## Code Example

```python
# Factory interface
class PizzaFactory:
    def create_pizza(self, toppings):
        pass

# Concrete factory for creating pizzas
class SimplePizzaFactory(PizzaFactory):
    def create_pizza(self, toppings):
        return Pizza(toppings)

# Product class
class Pizza:
    def __init__(self, toppings):
        self.toppings = toppings

    def bake(self):
        print(f"Baking pizza with {', '.join(self.toppings)} toppings.")

# Example usage
pizza_factory = SimplePizzaFactory()
custom_pizza = pizza_factory.create_pizza(["Pepperoni", "Mushrooms", "Cheese"])
custom_pizza.bake()
```

In this example, the `PizzaFactory` is the abstract factory, `SimplePizzaFactory` is the concrete factory, and `Pizza` is the product class. The client (customer) uses the factory to get a customized pizza without worrying about the pizza-making details.

## Comparison to Abstract Factory

The Factory Pattern focuses on creating individual objects without specifying their concrete classes.
It serves as a centralized mechanism for object creation, providing a simple interface for creating instances.

In contrast, the Abstract Factory Pattern is designed to create families of related or dependent objects without specifying their concrete classes.
It introduces an additional layer of abstraction, allowing the creation of entire families of objects that work together seamlessly.

The Factory Pattern operates at a lower level, dealing with the creation of specific objects, while the Abstract Factory Pattern operates at a higher level, managing the creation of families of objects that share a common theme or purpose.

The Factory Pattern simplifies object creation but may lack the ability to manage complex relationships between objects, a capability that the Abstract Factory Pattern provides.