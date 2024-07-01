# <!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">NestJS Clean Architecture Starter</h1>

  <p align="center">
    An awesome starter repository to start your NestJS project!
    <br />
    <a href="https://github.com/tommyprmbd/nestjs-clean-architecture"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <!-- <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The "NestJS Clean Architecture Starter" is a boilerplate project designed to help developers quickly set up a robust and maintainable NestJS application. Leveraging the principles of Clean Architecture, this starter project provides a solid foundation for building scalable and testable applications. With its intuitive design and comprehensive features, developers can focus on writing business logic while adhering to best practices.

### Features

- **Clean Architecture Design Pattern**: Implements Clean Architecture principles to promote separation of concerns, making the application more modular, testable, and maintainable.

- **Easy to Use**: Designed with simplicity in mind, this starter project allows developers to quickly set up and start coding without worrying about the initial project configuration.

- **Test-Case Examples**: Includes example test cases to demonstrate best practices in writing unit and integration tests, ensuring your application is reliable and bug-free.

- **Docker Support**: Easily run the application in a Docker container, providing a consistent development and deployment environment.

- **Pre-Commit Hooks**: Utilizes pre-commit hooks to enforce code quality and consistency before changes are committed, catching issues early in the development process.

- **SonarQube Configuration**: Comes with a pre-configured SonarQube setup to enable continuous inspection of code quality and security, ensuring adherence to coding standards.

### Benefits

- **Maintainability**: Clean Architecture promotes a modular codebase, making it easier to manage and extend as your application grows.
- **Testability**: With built-in test cases and a clear separation of concerns, writing and maintaining tests becomes straightforward and efficient.
- **Scalability**: The modular design allows you to scale different parts of your application independently, ensuring your system can handle increased load.
- **Consistency**: Docker support ensures that your application runs consistently across different environments, reducing "it works on my machine" issues.
- **Code Quality**: Pre-commit hooks and SonarQube integration ensure that your codebase remains clean, consistent, and secure throughout the development lifecycle.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Git**: A version control system to track changes in your code.
- **Docker**: A platform to develop, ship, and run applications in containers.
- **Docker Compose**: A tool for defining and running multi-container Docker applications.

### Installation

1. Clone the Project: Use the following command to clone the repository:
   ```bash
   git clone git@scm.salt.id:tommyprmbd/nestjs-clean-architecture-starter.git
   ```
2. Copy Environment Files:
   ```bash
   cp .env.example .env
   cp ./environment/.env.example ./environment/.env
   ```
3. Run the Application: Use Docker Compose to start the application:
`bash
    docker compose --env-file=.env --file=docker/compose/local/docker-compose.yml up -d
    `
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Setup NestJS Clean Architecture
- [x] Add example CRUD
- [x] Add Authentication using JWT
- [x] Add Test Cases
- [x] Setup docker
- [x] Setup pre-commit
- [ ] Setup sonarqube
- [ ] Add example usage with example features (additional)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@tommyprmbd](https://instagram.com/tommyprmbd) - tommypriambodo@gmail.com

Project Link: [https://scm.salt.id/tommyprmbd/nestjs-clean-architecture-starter](https://scm.salt.id/tommyprmbd/nestjs-clean-architecture-starter)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://img.shields.io/github/stars/tommyprmbd/nestjs-clean-architecture
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
