# Decorator Pattern

The Decorator Pattern is like adding customizable accessories to your smartphone. You can choose to enhance its features by attaching different decorations, such as a new camera lens or a stylish cover, without altering the phone's core structure. It allows you to dynamically add new functionalities to objects without changing their original structure.

## Definition

The Decorator Pattern is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper classes that contain the desired behaviors. It allows the addition of new features to individual objects without altering their structure. This pattern involves a set of decorator classes that are used to wrap concrete components, dynamically extending their functionalities. Clients can compose objects with different decorators, creating combinations of features tailored to their needs.

## Considerations

Considerations for the Decorator Pattern include designing clear and distinct interfaces for both the base components and the decorators. It's crucial to maintain a balance between the simplicity of individual components and the flexibility of adding new features dynamically. Care should be taken to avoid over-complicating the system with too many decorator classes, and proper ordering of decorators is essential to ensure the desired behavior.

## Benefits

The Decorator Pattern enhances code flexibility by allowing the addition of new functionalities to objects without altering their original structure. It promotes the open-closed principle, enabling the extension of classes without modifying their code. The pattern supports the creation of versatile and customizable objects by combining different decorators, providing a modular and reusable approach.

## Trade-offs

While the Decorator Pattern promotes flexibility, it may introduce a potentially large number of decorator classes, which could lead to increased complexity. Careful consideration is required when selecting and ordering decorators to achieve the desired behavior. Developers should balance the benefits of dynamic feature addition with the challenge of managing the interactions between different decorators.

## Practical Use Case

**Input/Output Streams:**\
In programming languages, input and output streams are often enhanced using the Decorator Pattern. Different decorators can be applied to add functionalities like buffering, encryption, or compression without modifying the core stream classes.

## Code Example

```python
# Component: Coffee
class Coffee:
    def cost(self):
        return 5

# Decorator: Milk
class MilkDecorator:
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self):
        return self._coffee.cost() + 2

# Decorator: Sugar
class SugarDecorator:
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self):
        return self._coffee.cost() + 1

# Example usage
simple_coffee = Coffee()
milk_coffee = MilkDecorator(simple_coffee)
sweet_coffee = SugarDecorator(milk_coffee)

print(simple_coffee.cost())  # Output: 5
print(milk_coffee.cost())    # Output: 7
print(sweet_coffee.cost())   # Output: 8
```

In this example, the Decorator Pattern allows the dynamic addition of features to a base object (Coffee) by wrapping it with decorator classes (MilkDecorator, SugarDecorator). The client can create different combinations of features by composing the base component with various decorators, resulting in a modular and customizable approach to object behavior.
