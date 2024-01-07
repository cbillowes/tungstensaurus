# Builder

The Builder pattern is like customizing your dream sandwich at a deli.
You choose each ingredient step by step, building a personalized sandwich without worrying about all the details upfront.
It gives you the freedom to create different sandwiches without having a fixed menu, making it like a DIY sandwich assembly line.

## Definition

Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
It involves a director class that orchestrates the construction through a builder interface, which defines the construction steps.
The Builder Pattern enables the construction of complex objects step by step, keeping the construction process separate from the actual
representation, and allowing the same construction process to produce different representations of the object.

## Considerations

Ensure the building steps are clear and easy to follow, making the customization process straightforward for users.

## Benefits

It provides flexibility, allowing users to create various combinations without the need for a predefined set of options, much like choosing ingredients for a sandwich.

## Tradeoffs

While offering flexibility, it might feel more involved for simpler objects, and the process of specifying each detail can add complexity.

## Practical Use Case

**Document Builders:**\
When constructing complex documents with various elements (headings, paragraphs, images), a document builder can use the Builder Pattern. Clients can specify the content and structure of the document step by step, allowing for the creation of different types of documents.

## Code Example

```python
class SandwichBuilder:
    def __init__(self):
        self.sandwich = Sandwich()

    def add_bread(self, bread):
        self.sandwich.set_bread(bread)

    def add_protein(self, protein):
        self.sandwich.set_protein(protein)

    def add_vegetables(self, vegetables):
        self.sandwich.set_vegetables(vegetables)

    def get_sandwich(self):
        return self.sandwich

class Sandwich:
    def __init__(self):
        self.bread = None
        self.protein = None
        self.vegetables = None

    def set_bread(self, bread):
        self.bread = bread

    def set_protein(self, protein):
        self.protein = protein

    def set_vegetables(self, vegetables):
        self.vegetables = vegetables

# Example usage
builder = SandwichBuilder()
builder.add_bread("Whole Grain")
builder.add_protein("Turkey")
builder.add_vegetables(["Lettuce", "Tomato", "Onion"])

sandwich = builder.get_sandwich()
print(f"My sandwich: {sandwich.bread}, {sandwich.protein}, {sandwich.vegetables}")
```

In this example, the `SandwichBuilder` helps construct a sandwich with different components, providing a flexible way to customize sandwiches.
