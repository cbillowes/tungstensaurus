---
title: Open/Closed
sidebar_position: 2
---

# Open/Closed Principle (OCP)

> Software entities (such as classes, modules, or functions) should be open for extension but closed for modification.

The principle encourages designing components in a way that allows for adding new functionalities without altering existing code.

## Guidelines

1. **Frequent Extensions:**\
   Use OCP when you anticipate frequent changes or extensions to the system's functionality.

2. **Framework or Library Development:**\
   Apply OCP when developing frameworks or libraries to enable users to extend or customize behavior.

## Considerations

- **Abstraction:**\
  Effective use of abstraction is key to achieving the OCP. Define abstract classes or interfaces that can be extended by new implementations.

  To create effective abstract classes or interfaces, focus on understanding the main ideas in your problem and identify common behaviors shared by different parts of your code.
  Keep the abstractions simple and give them meaningful names, encapsulating the shared behavior while allowing for future extension.

  Regularly review and refine your abstractions, ensuring they stay clear and stable as your code evolves.

- **Existing Code:**\
  If there's a bug in existing code then you would need to address the bug and correct the implementation. The Open/Closed Principle (OCP) primarily applies to **accommodating changes for adding new features or extending functionalities without modifying existing, stable code**.
  However, fixing bugs is a different scenario, and it often involves modifying existing code.

## Benefits

- **Flexibility:**\
  OCP increases system flexibility, allowing for the introduction of new features without modifying existing, stable code.

- **Maintainability:**\
  OCP enhances maintainability by minimizing the need to alter existing code when introducing new features.
  This reduces the risk of introducing bugs or unintended side effects, making the codebase more stable and easier to manage over time.

- **Code Reusability:**\
  By designing software components to be open for extension, OCP encourages the creation of reusable and modular code.
  New functionality can be added through the creation of new classes or modules, which can then be easily integrated into the existing system without modifying its core components.

## Trade-offs

- **Initial Complexity:**\
  Implementing OCP may introduce initial complexity in the form of abstraction layers, which might be seen as overhead for small, straightforward systems.

- **Learning Curve:**\
  Teams unfamiliar with OCP and abstraction concepts may face a learning curve when trying to implement this principle effectively. Understanding how to design flexible and extensible abstractions requires practice and experience.

- **Potential Over-Abstraction:**\
  There's a risk of over-abstracting the system, especially if designers create overly complex extension points or interfaces. Striking the right balance between flexibility and simplicity is crucial; too much abstraction can lead to confusion and hinder code readability.

## Code Example

Using a geometric shapes scenario, we'll design a system where new shapes can be added without modifying existing code:

```python
from abc import ABC, abstractmethod

# Abstract class representing a geometric shape
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Concrete implementation of Shape: Rectangle
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

# Extension: New shape without modifying existing code
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

# Client code using the shapes
def calculate_total_area(shapes):
    total_area = 0
    for shape in shapes:
        total_area += shape.area()
    return total_area

# Usage of the system
rectangle = Rectangle(5, 10)
circle = Circle(7)

total_area = calculate_total_area([rectangle, circle])
print(f'Total Area: {total_area}')
```

In this example:

- We define an abstract class `Shape` with a method `area` to calculate the area of a shape.
- The concrete class `Rectangle` implements the `Shape` interface with its specific area calculation.
- We introduce a new shape, `Circle`, without modifying the existing code. This adheres to the OCP, as we are extending the system with new functionality.
- The client code, represented by the `calculate_total_area` function, operates on a list of shapes, calculating their total area without needing to modify its implementation when new shapes are added.

This example illustrates how the system is open for extension (new shapes can be added) but closed for modification (existing code doesn't need to change).
The abstraction provided by the `Shape` interface allows for the creation of new shapes without altering the behavior of existing shapes or the client code that uses them.
