# Architecture Overview

This project follows the **Clean Architecture** principles. The codebase is divided into three main layers:

- **Domain** – Contains the enterprise business rules. It defines models, interfaces and data transfer objects without any external dependencies.
- **Use Case** – Implements the application business rules orchestrating domain objects to perform specific actions.
- **Infrastructure** – Provides frameworks and delivery mechanisms such as controllers, database implementations, authentication and configuration.

## Folder Structure

```
src
├── domain        # Domain models, DTOs, interfaces and service contracts
├── usecase       # Application use cases that coordinate domain logic
└── infra         # Adapters such as controllers, repositories, auth and config modules
```

Other top level folders include:

- `test/` – Placeholder for unit or integration tests.
- `docker/` – Docker and Compose configurations for local development.
- `environment/` – Example environment files consumed by the configuration module.

## Design Patterns

- **Repository Pattern** – Domain repositories are defined as interfaces and implemented in the infrastructure layer. For example, `UserRepository` extends an abstract repository and exposes custom lookups like `findByEmail`
- **Use Case Proxy** – Controllers receive instances of use cases through a lightweight proxy, decoupling HTTP transport from business logic.
- **Dependency Inversion** – Domain layers depend only on abstractions; concrete implementations live in the infrastructure layer.

## Development Workflow

1. **Add or modify domain contracts** under `src/domain`.
2. **Create a use case** in `src/usecase` that implements domain interfaces.
3. **Implement infrastructure adapters** (repositories, controllers, etc.) inside `src/infra`.
4. **Register the use case** using the proxy system in `src/infra/use-cases-proxy` so it can be injected where needed.
5. Run `npm run start:dev` to start the API server and `npm test` to execute tests.

This layered approach keeps the domain independent from external frameworks and makes the application easy to maintain and extend.
