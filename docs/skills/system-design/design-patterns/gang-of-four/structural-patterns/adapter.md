# Adapter Pattern

The Adapter Pattern is like using a universal plug to connect your devices in a foreign country where the sockets are different. It helps make incompatible interfaces work together, acting as a translator between two components that wouldn't normally fit.

## Definition

The Adapter Pattern is a structural design pattern that allows incompatible interfaces to collaborate. It acts as a bridge between two incompatible interfaces by providing a wrapper (adapter) that translates the interface of one class into the interface expected by the client. This enables objects with different interfaces to work together seamlessly, enhancing reusability and promoting flexibility in system design.

## Considerations

Considerations for the Adapter Pattern involve ensuring that the adapter properly translates the interface of one class into another without losing functionality. It's essential to manage the trade-offs between making the system more flexible and introducing potential complexities in the form of adapters.

## Benefits

The Adapter Pattern allows for the integration of existing code with new components that have different interfaces, promoting code reuse and system extensibility. It facilitates the collaboration between classes that wouldn't normally work together, enhancing the overall flexibility of the system.

## Trade-offs

While the Adapter Pattern improves system flexibility, it may introduce additional layers of abstraction and complexity. Designers must carefully balance the need for adaptability with the potential drawbacks of complicating the system architecture. Ensuring that adapters are well-designed and easy to maintain is crucial for long-term system sustainability.

## Practical Use Case

**Legacy System Integration:**\
When integrating new software with existing legacy systems that use different interfaces, the Adapter Pattern can be applied. Adapters are created to bridge the gap between the old and new interfaces, allowing them to work together seamlessly.

## Code Example

```python
# Adaptee: The device with an incompatible interface
class EuropeanSocket:
    def provide_electricity(self):
        return "Providing electricity using European socket."

# Target: The interface we want to use
class USPlugInterface:
    def provide_power(self):
        pass

# Adapter: Translates the EuropeanSocket interface to the USPlugInterface
class Adapter(USPlugInterface):
    def __init__(self, european_socket):
        self.european_socket = european_socket

    def provide_power(self):
        return self.european_socket.provide_electricity()

# Client: The code that expects the USPlugInterface
def charge_device(device):
    return device.provide_power()

# Example usage
european_socket = EuropeanSocket()
adapter = Adapter(european_socket)
result = charge_device(adapter)
print(result)  # Output: Providing electricity using European socket.
```

In this example, the Adapter Pattern allows the EuropeanSocket (Adaptee) to work seamlessly with the USPlugInterface (Target) by introducing the Adapter class. The Adapter translates the EuropeanSocket interface into the expected USPlugInterface, enabling the charge_device function to work with the previously incompatible device.
