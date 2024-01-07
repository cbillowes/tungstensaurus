---
title: Liskov Substitution
sidebar_position: 3
---

# Liskov Substitution Principle (LSP)

> Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.

If you have a class and you create a new class that inherits from it, you should be able to use objects of the new class wherever you use objects of the original class without causing unexpected issues.

## Guidelines

- **Inheritance is Meaningful:**\
  Use LSP when inheritance is meaningful and represents an "is-a" relationship between the base class and its subclasses.

- **Subclasses Enhance, Not Restrict:**\
  Apply LSP when subclasses enhance the behavior of the base class, rather than restricting or altering it.

- **Consistent Behavior:**\
  Use LSP when you want consistent behavior across different subclasses, ensuring that clients can rely on a common interface.

- **Polymorphism is Desired:**\
  Apply LSP when you want to leverage polymorphism, allowing different objects to be used interchangeably based on a shared interface.

## Considerations

- **Behavior Preservation:**
  Subclasses should preserve the behavior of the superclass, ensuring that clients relying on the superclass's interface won't be surprised by unexpected changes.

- **Avoiding Violations:**
  Be cautious about violating the LSP, which could lead to incorrect program behavior. Be especially mindful of overriding methods in subclasses.

- **Design with Care:**
  Design class hierarchies with care, considering whether inheritance truly represents an "is-a" relationship and whether subclasses adhere to the behavior of the superclass.

## Benefits

- **Interchangeability:**
  LSP ensures that objects of different classes can be used interchangeably, promoting flexibility in the design.

- **Ease of Maintenance:**
  By adhering to LSP, the behavior of the program is more predictable, making it easier to maintain and extend the code.

- **Polymorphism and Extensibility:**
  LSP supports polymorphism, allowing for the creation of new subclasses that can be easily integrated into existing code without unexpected side effects.

## Trade-offs

- **Design Complexity:**
  Implementing LSP may introduce design complexities, especially when dealing with complex class hierarchies. Striking the right balance is essential.

- **Overhead of Polymorphism:**
  In some scenarios, the overhead of polymorphism introduced by LSP may impact performance. Evaluate whether the benefits of polymorphism outweigh the performance considerations.

- **Understanding Inheritance:**
  Developers need a solid understanding of inheritance and the specific requirements of LSP to effectively apply the principle. This could be a potential trade-off in terms of learning curve and development time.

## Code Example

```python
# Base class adhering to LSP
class Bird:
    def fly(self):
        print("Flying")

# Subclass enhancing behavior
class Penguin(Bird):
    def swim(self):
        print("Swimming")

# Subclass adhering to LSP
class Sparrow(Bird):
    pass  # Sparrow inherits the fly method from the Bird class

# Function using LSP-compliant objects
def make_bird_fly(bird):
    bird.fly()

# Usage of LSP
penguin = Penguin()
sparrow = Sparrow()

make_bird_fly(penguin)  # Works as expected
make_bird_fly(sparrow)  # Works as expected
```

In this example, both `Penguin` and `Sparrow` are subclasses of `Bird`, and they can be used interchangeably where a `Bird` is expected, adhering to the Liskov Substitution Principle.
