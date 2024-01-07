---
title: Dependency Inversion
sidebar_position: 5
---

# Dependency Inversion Principle (DIP)

> High-level modules should not depend on low-level modules, but both should depend on abstractions. Additionally, abstractions should not depend on details; details should depend on abstractions.

DIP suggests that the overall structure of a system should not rely on the specifics of its individual components. Instead, both high-level and low-level components should depend on abstract interfaces, allowing for flexibility and interchangeability.

### When to Use the Principle:

- **Decoupling Dependencies:**\
  Apply DIP when aiming to decouple high-level and low-level modules, fostering a design where changes in one module do not directly affect the other.

- **Abstraction Over Implementation:**\
  Use DIP when designing systems to depend on abstractions rather than concrete implementations, enabling easier adaptation to changes in details.

- **Plug-and-Play Modules:**\
  Apply DIP when creating plug-and-play modules, allowing for the introduction of new components without altering the existing structure.

- **Ease of Testing:**\
   Use DIP to facilitate unit testing by enabling the use of mock objects or test doubles that adhere to the same abstractions as the actual components.

## Considerations

- **Well-Defined Abstractions:**\
  Ensure that the abstractions used in DIP are well-defined and represent cohesive sets of functionalities. This is crucial for maintaining a clear and consistent design.

- **Avoiding Violations:**\
  Be mindful of violating DIP by allowing high-level modules to depend on low-level details directly. Such violations can lead to a lack of flexibility and hinder maintainability.

- **Abstraction Hierarchy:**\
  Consider the hierarchy of abstractions in the system. Strive for a balance that allows for flexibility without introducing unnecessary complexity.

## Benefits

- **Flexibility in Component Substitution:**\
  DIP promotes flexibility by allowing components to be easily substituted with alternative implementations that adhere to the same abstractions.

- **Reduced Dependency Coupling:**\
  The principle reduces direct dependencies between high-level and low-level components, resulting in a more modular and maintainable system.

- **Easier Adaptation to Changes:**\
  DIP makes it easier to adapt to changes in details or components, as long as the new implementations adhere to the established abstractions.

## Trade-offs

- **Abstraction Overhead:**\
  Introducing abstractions as per DIP may add initial design overhead. Finding the right level of abstraction without overcomplicating the system is a balancing act.

- **Learning Curve:**\
  Developers need a good understanding of abstraction concepts and the proper application of DIP. This might result in a learning curve for teams new to the principle.

- **Development Time:**\
  Adhering to DIP may require additional design effort initially. However, the long-term benefits in terms of flexibility and maintainability often outweigh this trade-off.

## Code Example

```python
# DIP-compliant code structure

# Abstraction representing a device
class Device:
    def turn_on(self):
        pass

    def turn_off(self):
        pass

# High-level module depending on abstraction
class RemoteControl:
    def __init__(self, device: Device):
        self.device = device

    def power_on(self):
        self.device.turn_on()

    def power_off(self):
        self.device.turn_off()

# Low-level module implementing abstraction
class Light(Device):
    def turn_on(self):
        print("Light turned on")

    def turn_off(self):
        print("Light turned off")

# Usage of DIP-compliant structure
light = Light()
remote_control = RemoteControl(light)

remote_control.power_on()  # Works as expected
remote_control.power_off()  # Works as expected
```

In this example, the `RemoteControl` high-level module depends on the abstraction `Device`. The `Light` low-level module implements the `Device` abstraction. This adheres to the Dependency Inversion Principle, allowing for flexibility and interchangeability of devices without directly coupling high-level and low-level components.
