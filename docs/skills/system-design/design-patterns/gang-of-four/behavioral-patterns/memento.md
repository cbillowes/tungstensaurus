# Memento Pattern

The Memento Pattern is like taking a snapshot of a document while you're editing it so that you can revert to that state later if needed. It allows objects to capture their internal state and store it externally, preserving a moment in time. It's like having a "save" option for your objects, enabling you to undo changes or restore them to a previous state.

## Definition

The Memento Pattern is a behavioral design pattern that allows an object's internal state to be captured and externalized without exposing its structure. It involves three main components: the originator (object whose state needs to be saved), the memento (object that stores the state of the originator), and the caretaker (object that keeps track of and manages mementos). This pattern provides the ability to undo and redo operations, as well as maintain a history of states.

## Considerations

Considerations for the Memento Pattern include designing mementos to be immutable to ensure the preservation of state. Care should be taken to manage the storage of mementos, especially in scenarios with limited memory. Developers need to define a clear interface for originators and mementos, promoting consistency in state management. It's important to decide how often to create mementos, balancing the need for history with the potential impact on memory.

## Benefits

The Memento Pattern provides a convenient way to capture and restore an object's state, enabling undo and redo functionalities. It promotes encapsulation by keeping the internal state of an object private. This pattern supports the ability to maintain a history of states, facilitating the implementation of features like versioning or rollback.

## Trade-offs

While the Memento Pattern offers flexibility in managing object state, it may increase memory usage, especially if many mementos need to be stored. Developers need to carefully manage the creation and storage of mementos to avoid unnecessary memory overhead. Additionally, creating mementos for large objects might impact performance, requiring a balance between memory usage and system responsiveness.

## Practical Use-Case

**Text Editors with Undo/Redo Functionality:**\
In a text editor application, the Memento Pattern can be applied to implement undo and redo functionalities. Each time a user makes changes, a memento is created to store the document's state. If the user decides to undo or redo, the application can restore the document to a previous state using the stored mementos.

## Code Example

```python
# Memento: Memento
class Memento:
    def __init__(self, state):
        self.state = state

# Originator: Originator
class Originator:
    def __init__(self):
        self.state = ""

    def set_state(self, state):
        self.state = state

    def create_memento(self):
        return Memento(self.state)

    def restore_state(self, memento):
        self.state = memento.state

# Caretaker: Caretaker
class Caretaker:
    def __init__(self):
        self.mementos = []

    def add_memento(self, memento):
        self.mementos.append(memento)

    def get_memento(self, index):
        return self.mementos[index]

# Client Code
originator = Originator()
caretaker = Caretaker()

originator.set_state("State 1")
caretaker.add_memento(originator.create_memento())

originator.set_state("State 2")
caretaker.add_memento(originator.create_memento())

originator.set_state("State 3")

# Restoring to previous state
memento = caretaker.get_memento(1)
originator.restore_state(memento)

print(originator.state)  # Output: State 2 (restored from memento)
```

In this example, the Memento Pattern is demonstrated with `Memento` as the memento, `Originator` as the originator, and `Caretaker` as the caretaker. The client code uses the originator to set and change states, create mementos, and the caretaker to manage and retrieve mementos. The application can then restore the state of the originator to a previous point using stored mementos.
