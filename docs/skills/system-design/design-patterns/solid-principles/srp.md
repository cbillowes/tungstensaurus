---
title: Single Responsibility
sidebar_position: 1
---

# Single Responsibility Principle (SRP)

> "A class should have only one reason to change."

It means that a class should have only one job or responsibility.
Achieving a single responsibility for a class involves careful design and adherence to the principle.

## Guidelines

Here are some guidelines and practices to help ensure that a class has only one job or responsibility:

1. **Understand the Class's Purpose:**\
   Clearly define the purpose of the class. What is its main responsibility or job?

1. **Encapsulation:**\
   Encapsulate related functionalities within the class. Keep the class focused on its primary responsibility.
   In this context it means bundling data and methods within a class, ensuring it has a clear, singular responsibility.

   This practice allows the class to operate like a "black box," hiding internal details and providing a well-defined interface.
   Encapsulation supports maintainability by allowing changes to the class's implementation without affecting external code, promoting modular and understandable designs.

1. **Separation of Concerns:**\
   Identify distinct concerns or tasks that the class performs. If a class starts doing more than one thing, consider breaking it into smaller classes, each handling a specific concern.

1. **Single Level of Abstraction:**\
   A class should operate at a single level of abstraction. If a class contains methods at various levels of abstraction, it might be an indication that it has multiple responsibilities.

1. **Class Naming:**\
   The name of the class should reflect its singular responsibility. If the name becomes too broad or includes multiple verb-nouns, it might be a sign that the class is doing too much.
   Good class names typically convey a clear, singular purpose or responsibility. They adhere to a "verb-noun" naming convention, where the verb indicates an action or behavior, and the noun represents the subject or entity.

   Examples of clearly communicated names include ReportGenerator, EmailSender, CustomerRepository, AuthenticationService, FileParser while names such as DataProcessor, Utility, Manager, Handler, Helper and DoEverything are too vague, generic, overused or encapsulates too many things.

1. **Testing:**\
   Classes with a single responsibility are often easier to test. If a class requires extensive testing for various scenarios unrelated to its primary responsibility, it might be a sign of multiple responsibilities.

1. **Keep It Simple:**
   Aim for simplicity. If a class seems too complex or has too many methods, it might be an indication that it's doing too much.

By following these guidelines and principles, you can design classes that have a clear and singular responsibility,
making your codebase more maintainable, scalable, and understandable.

Regular code reviews and refactoring can help in ensuring that classes maintain their single responsibility over time.

## Considerations

- **Clearly Defined Responsibility:**\
  Each class should have a clear and well-defined responsibility.

- **Avoiding God Classes:**\
  Preventing the creation of large, monolithic classes that try to do everything.

- **Context Matters:**\
  The appropriateness of SRP depends on the context and nature of the application. In some cases, a class might naturally have multiple responsibilities that are closely related, and splitting them could result in artificial divisions that hinder maintainability.

- **Project Size and Scope:**\
  For smaller projects or prototyping, adhering strictly to SRP might be unnecessary and could introduce unnecessary overhead in terms of development time and complexity.

- **Flexibility vs Rigidity:**\
  Overly strict adherence to SRP might lead to a system that is rigid and difficult to adapt to changing requirements. Sometimes, a certain degree of flexibility is necessary.

- **Learning Curve:**\
  For teams new to SRP or working in domains with complex business rules, the learning curve associated with adhering to SRP may slow down development initially.

## Benefits

- **Maintainability:**\
  Code is easier to understand and maintain because each class has a focused purpose.

- **Flexibility:**\
  Changes to one aspect of the system are less likely to affect other unrelated aspects.

- **Reusability and Extensibility:**\
  Enhances code maintainability by isolating responsibilities to individual classes, simplifying debugging, and promoting code reuse and extensibility.

## Trade-offs

- **Increased Number of Classes:**\
  Following SRP might lead to a larger number of smaller classes, which could be seen as a trade-off in terms of complexity.
  In real-world scenarios, there might be pragmatic reasons to compromise on SRP. For example, breaking a class into smaller, focused classes might lead to an explosion in the number of classes, making the codebase harder to manage.

- **Complexity:**\
  SRP needs to be balanced with other design principles like cohesion, coupling, and simplicity. Sometimes, achieving a perfect adherence to SRP might lead to increased complexity or reduced cohesion in the overall system.

- **Over-Abstraction:**\
  Strict adherence to SRP can sometimes lead to over-abstracting the system, making it harder to understand for developers who are not familiar with the intricate details of the design.

- **Maintainability:**\
  While SRP contributes to maintainability, breaking down responsibilities too much can sometimes impact the understandability of the code. Finding the right balance is crucial.

## Code Example

```python
class Report:
    def __init__(self, title, content):
        self.title = title
        self.content = content

    def generate_report(self):
        # Some code to generate the report and save it to a file
        pass

class NotificationService:
    def send_email_notification(self, report):
        # Some code to send an email notification about the generated report
        pass
```

In this improved example, the `Report` class is responsible for generating and managing the report, while the `NotificationService` class is responsible for sending email notifications. Each class now has a single responsibility, adhering to the Single Responsibility Principle.

By separating concerns, we've made the code more modular and easier to maintain. If there are changes in the email notification logic, it won't affect the report generation, and vice versa.
