# Command Pattern

The Command Pattern is like giving your TV remote control to someone else to operate on your behalf. It allows you to encapsulate requests as objects, making it easy to send different commands without knowing the details of how they are executed. It's a way of turning actions into objects, providing flexibility and enabling features like undo/redo functionalities.

## Definition

The Command Pattern is a behavioral design pattern where an object represents a request, encapsulating all the information about the request, including the method call, the method arguments, and the receiver object. This pattern decouples the sender and receiver of a request, allowing command objects to be parameterized and queued for execution. It also provides support for undoable operations by storing the state necessary for reversal.

## Considerations

Considerations for the Command Pattern include designing clear interfaces for commands and ensuring that command objects have enough information to execute the request properly. It's crucial to manage the lifecycle of command objects, especially when implementing undo/redo functionality. Proper error handling and communication between the sender and receiver of commands are essential for maintaining a robust and reliable system.

## Benefits

The Command Pattern promotes flexibility by allowing the parameterization of objects with different requests. It supports undo/redo functionalities by encapsulating the necessary information to revert a command's effects. This pattern also enables the decoupling of the sender and receiver, making it easier to extend and maintain code by adding new commands without modifying existing code.

## Trade-offs

While the Command Pattern provides flexibility, it may introduce a proliferation of command classes if there are numerous types of commands. It could also lead to increased memory usage due to the creation and retention of command objects. Developers need to balance the benefits of encapsulation and flexibility with the potential drawbacks of increased complexity.

## Practical Use-Case

**GUI Applications:**\
In graphical user interface (GUI) applications, the Command Pattern can be employed to handle user interactions like button clicks and menu selections. Each command object encapsulates a specific action, allowing users to customize toolbar buttons and menu items. Undo/redo functionalities can be implemented by storing a history of executed commands.

## Code Example

```python
from abc import ABC, abstractmethod

# Command: Command
class Command(ABC):
    @abstractmethod
    def execute(self):
        pass

# Concrete Commands: LightOnCommand, LightOffCommand
class LightOnCommand(Command):
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.turn_on()

class LightOffCommand(Command):
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.turn_off()

# Receiver: Light
class Light:
    def turn_on(self):
        print("Light is ON")

    def turn_off(self):
        print("Light is OFF")

# Invoker: RemoteControl
class RemoteControl:
    def __init__(self):
        self.command = None

    def set_command(self, command):
        self.command = command

    def press_button(self):
        self.command.execute()

# Client Code
light = Light()
light_on = LightOnCommand(light)
light_off = LightOffCommand(light)

remote = RemoteControl()
remote.set_command(light_on)
remote.press_button()  # Output: Light is ON

remote.set_command(light_off)
remote.press_button()  # Output: Light is OFF
```

In this example, the Command Pattern is demonstrated with `Command` as the abstract command, `LightOnCommand` and `LightOffCommand` as concrete commands, `Light` as the receiver, and `RemoteControl` as the invoker. The client code configures the invoker with different commands, allowing the remote control to execute various actions on the light.
