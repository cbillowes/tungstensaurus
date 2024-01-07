# Composite Pattern

The Composite Pattern is like building a tree structure using LEGO bricks, where each LEGO piece can be either a single brick or another structure of bricks. It allows you to treat individual LEGO pieces and complex structures of LEGO pieces in the same way, making it easy to create and manipulate different types of structures.

## Definition

The Composite Pattern is a structural design pattern that lets you compose objects into tree structures to represent part-whole hierarchies. It allows clients to treat individual objects and compositions of objects uniformly. This pattern creates a unified interface for both individual objects (leaf nodes) and compositions (composite nodes), simplifying the client's code and making it easier to work with complex structures.

## Considerations

Considerations for the Composite Pattern include designing clear and consistent interfaces for both leaf nodes and composite nodes. It's crucial to balance the simplicity of the client code with the need for flexibility in creating and manipulating complex structures. Properly managing the hierarchy and ensuring that the composite and leaf components share a common interface are essential considerations.

## Benefits

The Composite Pattern promotes code reusability by allowing clients to treat individual objects and compositions uniformly. It simplifies the client code, making it easy to work with complex hierarchies of objects. The pattern enables the construction of recursive structures and supports the addition of new types of components without modifying existing code.

## Trade-offs

While the Composite Pattern simplifies client code, it may introduce challenges in ensuring that all components share a common interface. The flexibility of adding new components can lead to complex hierarchies, requiring careful design to maintain clarity. Additionally, managing the uniform treatment of leaf nodes and composite nodes may involve additional checks in the client code.

## Practical Use Case

**File Systems:**\
Modeling a file system where files and directories share a common interface illustrates the Composite Pattern. Directories can contain both files and subdirectories, creating a hierarchical structure that can be treated uniformly.

## Code Example

```python
# Component: Graphic
class Graphic:
    def draw(self):
        pass

# Leaf: Circle, Square
class Circle(Graphic):
    def draw(self):
        return "Drawing a circle."

class Square(Graphic):
    def draw(self):
        return "Drawing a square."

# Composite: Picture
class Picture(Graphic):
    def __init__(self):
        self.graphics = []

    def add(self, graphic):
        self.graphics.append(graphic)

    def draw(self):
        result = []
        for graphic in self.graphics:
            result.append(graphic.draw())
        return ", ".join(result)

# Example usage
circle = Circle()
square = Square()

picture = Picture()
picture.add(circle)
picture.add(square)

print(picture.draw())  # Output: Drawing a circle, Drawing a square.
```

In this example, the Composite Pattern allows the client to treat individual shapes (Circle, Square) and compositions (Picture) uniformly. The client code can work seamlessly with different types of graphics, enabling the creation of complex structures while maintaining a unified interface.
