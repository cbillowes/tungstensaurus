# Architecture

Scalability in the context of software and system architecture refers to the ability of a system to handle an increasing amount of workload or demand by adding resources or adapting to the growing needs efficiently.
Achieving scalability is crucial for ensuring that a system can grow and perform well as user numbers, data, or transaction volumes increase.

## Monolithic

The entire application is designed as a single, tightly integrated unit.

### Considerations

:::tip Pros

- Simple to develop and deploy.
- Easier to maintain in smaller applications.

:::

:::danger Trade-offs

- Increased complexity.
- Limited scalability and flexibility.
- Difficult to maintain and scale.
- A single point of failure can bring down the entire system.

:::

### Resources

- [Pattern: Monolithic Architecture](https://microservices.io/patterns/monolithic.html)

## Polylith

Polylith is a software architecture that applies functional thinking at the system scale.
It helps us build simple, maintainable, testable, and scalable backend systems.
It emphasizes building applications as a collection of independently deployable components.

### Considerations

:::tip Pros

- Improved scalability and flexibility.
- Independent deployment of components.
- Decentralized data management.
- Promotes reusability and maintainability.
- Components can be developed using different technologies.

:::

:::danger Trade-offs

- Increased complexity. The increased number of components and the need to define clear interfaces can introduce additional complexity, especially in large systems.
- Learning curve. The adoption may require developers to learn new concepts and adapt to a different way of structuring applications, potentially leading to a steeper learning curve.

:::

### Resources

<iframe style={{"width": "100%", "max-width": "960px", "height": "500px"}} src="https://www.youtube.com/embed/Xz8slbpGvnk" title="Polylith in a Nutshell" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe style={{"width": "100%", "max-width": "960px", "height": "500px"}} src="https://www.youtube.com/embed/pebwHmibla4" title="Polylith - the last architecture you will ever need by Joakim Tengstrand and Furkan Bayraktar" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Clean Architecture

Clean Architecture is a software design concept that emphasizes organizing code in a way that prioritizes separation of concerns and maintainability.

It consists of concentric circles representing different layers, with the innermost circle containing the core business logic, surrounded by layers such as interfaces, controllers, and frameworks.

This design allows the business logic to remain independent of external frameworks, making it more adaptable to changes.

For example, a web application following Clean Architecture might have a core business logic layer handling user interactions, which is shielded from the specifics of the web framework or database implementation, promoting a modular and testable codebase.

### Considerations

- Independence of frameworks and databases from the core.
- Easily testable and maintainable.
- Supports evolutionary design.

:::tip Pros

- Separation of concerns.
- Modularity and reusability.
- Well-suited for large-scale applications.
- Promotes testability and maintainability.
- Independent of external frameworks and databases.
- Supports evolutionary design.

:::

:::danger Trade-offs

- Increased complexity. The increased number of layers and the need to define clear interfaces can introduce additional complexity, especially in large systems.
- Learning curve. The adoption may require developers to learn new concepts and adapt to a different way of structuring applications, potentially leading to a steeper learning curve.
- Over-engineering. The architecture may be overkill for smaller applications, potentially leading to unnecessary complexity.
- Performance overhead. The need for inter-layer communication can introduce additional overhead, potentially impacting performance.
- Testing. Testing applications following Clean Architecture can be challenging, especially when there are dependencies between layers.
- Deployment. Deploying applications following Clean Architecture can be challenging, especially when there are dependencies between layers.

:::

### Resources

<iframe style={{"width": "100%", "max-width": "960px", "height": "500px"}} src="https://www.youtube.com/embed/1OLSE6tX71Y" title="Understand Clean Architecture in 7 Minutes" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Examples

1. **Hexagonal Architecture (Ports and Adapters):**
   A typical implementation of Clean Architecture involves using the Hexagonal Architecture pattern. Ports define interfaces for interacting with external elements, while Adapters implement these interfaces and connect the application to frameworks or databases. This structure is evident in many Clean Architecture implementations.

2. **Android Architecture Components (Android):**
   Android's Architecture Components, especially the combination of ViewModel, LiveData, and Room Database, align with Clean Architecture principles. The ViewModel serves as the presentation layer, LiveData as the data layer, and Room Database as the gateway to external data sources.

3. **Spring Boot (Java):**
   Spring Boot, a Java-based framework, allows developers to implement Clean Architecture principles. Controllers (inbound adapters) handle incoming requests, services encapsulate business logic (use cases), and repositories (outbound adapters) interact with databases or external systems.

4. **.NET Core (C#):**
   .NET Core applications, especially those using ASP.NET Core for web development, can be structured following Clean Architecture principles. Controllers handle HTTP requests, services contain business logic, and interfaces define boundaries between layers.

5. **SwiftUI (Swift):**
   SwiftUI, Apple's declarative UI framework for Swift, aligns well with Clean Architecture. Views represent the user interface, ViewModels encapsulate presentation logic, and data models serve as the application's core entities.

6. **React + Redux (JavaScript/TypeScript):**
   React applications combined with Redux state management can follow Clean Architecture principles. React components (views) are responsible for rendering, Redux manages the state (use cases), and external APIs or services act as data sources (gateways).

7. **Ruby on Rails (Ruby):**
   While Rails conventionally follows the MVC pattern, developers can apply Clean Architecture principles by separating concerns more explicitly. Controllers handle HTTP requests, services contain business logic, and models focus on representing core entities.

8. **Clean Swift (Swift):**
   Clean Swift, also known as VIP (View-Interactor-Presenter), is an architecture pattern designed with Clean Architecture principles in mind. It structures iOS applications in a way that promotes testability and separation of concerns.

## Microservices

The application is broken down into small, independent services that communicate through APIs.

### Considerations

:::tip Pros

- Improved scalability and flexibility.
- Independent deployment of services.
- Decentralized data management.
- Promotes reusability and maintainability.
- Services can be developed using different technologies.
- Communication through standardized protocols like SOAP or REST.
- Enables independent scaling of services based on their specific requirements.
- Facilitates fault isolation, allowing the failure of one service to not impact the entire system.

:::

:::danger Trade-offs

- Increased complexity. The increased number of services and the need to define clear interfaces can introduce additional complexity, especially in large systems.
- Learning curve. The adoption may require developers to learn new concepts and adapt to a different way of structuring applications, potentially leading to a steeper learning curve.
- Increased overhead. The need for inter-service communication can introduce additional overhead, potentially impacting performance.
- Testing. Testing microservices can be challenging, especially when there are dependencies between services.
- Deployment. Deploying microservices can be challenging, especially when there are dependencies between services.

:::

### Resources

- [Pattern: Microservice Architecture](https://microservices.io/patterns/microservices.html)

<iframe style={{"width": "100%", "max-width": "960px", "height": "500px"}} src="https://www.youtube.com/embed/rv4LlmLmVWk" title="Microservices explained - the What, Why and How?" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Service-Oriented Architecture (SOA)

Services are loosely coupled and independently deployable, communicating through well-defined interfaces.

### Considerations

- Promotes reusability and maintainability.
- Services can be developed using different technologies.
- Communication through standardized protocols like SOAP or REST.
- Requires effective service discovery and communication mechanisms.

## Serverless Architecture

Applications are built using functions (serverless) that run in response to events without the need for managing servers.

### Considerations

- No server management required.
- Cost-effective with pay-as-you-go pricing.
- Well-suited for event-driven applications.
- Reduced development time.
- Vendor lock-in.
- Limited control over infrastructure.
- Cold start issues.

## Event-Driven Architecture

Components communicate by triggering and reacting to events.

### Considerations

- Loose coupling between components.
- Scalable and responsive to changes.
- Well-suited for real-time applications.

## Layered Architecture

The application is divided into layers (e.g., presentation, business logic, data access) with each layer having specific responsibilities.

### Considerations

- Clear separation of concerns.
- Modularity and ease of maintenance.
- Each layer communicates with adjacent layers.
- Layers can be deployed on separate servers.
- Increased complexity.
- Performance overhead due to inter-layer communication.

## Model-View-Control (MVC)

MVC stands for Model View Controller where the application is divided into those three interconnected components.

### Considerations

- Separation of concerns.
- Modularity and reusability.
- Well-suited for user interface development.
- Increased complexity.

### Examples

1. **Ruby on Rails:**
   A web application framework written in Ruby that follows the MVC pattern.
   It emphasizes convention over configuration and provides a set structure for organizing code.

2. **Spring MVC (Java):**
   Part of the larger Spring Framework for Java, Spring MVC is a web framework that implements the MVC pattern.
   It facilitates the development of web applications with Java-based controllers, models, and views.

3. **Django (Python):**
   A high-level web framework for Python that adopts the MVC architectural pattern.
   Django provides an Object-Relational Mapping (ORM) system for models, views for handling user interface logic, and controllers for managing requests.

4. **Express.js (Node.js):**
   A minimal and flexible web application framework for Node.js that is often used in combination with the Model-View-Controller pattern.
   Developers can structure their Node.js applications with separate files for models, views, and controllers.

5. **iOS Development (UIKit):**
   Apple's UIKit framework for iOS development encourages the use of the MVC architecture.
   ViewControllers (controllers) handle user input and orchestrate interactions between the user interface elements (views) and data models.

6. **Android Development (Android SDK):**
   Android development using the Android SDK typically involves adopting an architecture that resembles MVC.
   Activities or Fragments serve as controllers, XML layout files define views, and data models handle business logic.

7. **AngularJS (JavaScript):**
   The AngularJS framework is designed with the MVC architecture in mind.
   Controllers manage the application's behavior, templates represent views, and services handle business logic and data.

8. **Symfony (PHP):**
   A PHP web application framework that follows the MVC pattern.
   Symfony provides a structured way to organize code, with controllers handling requests, templates for views, and entities for data models.
