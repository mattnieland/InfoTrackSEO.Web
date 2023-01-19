<!-- Original template: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
-->
[![infotrackseo-dev](https://github.com/mattnieland/InfoTrackSEO.Web/actions/workflows/infotrackseo-dev.yml/badge.svg)](https://github.com/mattnieland/InfoTrackSEO.Web/actions/workflows/infotrackseo-dev.yml)


[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mattnieland/InfoTrackSEO">
    <img src="images/logo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">InfoTrackSEO.Web</h3>

  <p align="center">
    <a href="https://github.com/mattnieland/InfoTrackSEO"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://infotrackseo.web.app">View Demo</a>
    ·
    <a href="https://github.com/mattnieland/InfoTrackSEO/issues">Report Bug</a>
    ·
    <a href="https://github.com/mattnieland/InfoTrackSEO/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#authentication">Authentication</a></li>
      </ul>
    </li>    
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This API was built with the following tools:

* [![Doppler][Doppler]][Doppler-url]
* [![Auth0][Auth0]][Auth0-url]
* [![Sentry][Sentry]][Sentry-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GTTING STARTED -->
## Getting Started

This is the front end companion to InfotrackSEO (https://github.com/mattnieland/InfotrackSEO) that I did for a job interview.  It's written in React.

### Prerequisites
You need the following pre-requisites to run this project:
* A Doppler account with a project (use local/dev/prod config environments)
* An Auth0 application (follow the guide for creating a SPA in Auth0's dashboard)
* A Sentry account (use this guide to get a DSN https://docs.sentry.io/platforms/javascript/guides/react)

### Installation

To start, apply the following tokens to your Doppler configs:
  ```sh
  REACT_APP_AUTH0_DOMAIN = Your Auth0 Domain
  REACT_APP_AUTH0_CLIENT_ID = Your Auth0 client id
  REACT_APP_SENTRY_DSN = Your Sentry DSN from above
  REACT_APP_ENVIRONMENT = local/dev/prod
  ```

To access the doppler secrets, install the Doppler CLI tool (https://docs.doppler.com/docs/cli) and login with the steps below.

Finally, base64 encode (https://www.base64encode.org) the string and run the following command in the InfoTrackSEO.csproj folder:

* Set Doppler Token
  ```sh
  doppler login
  ```

* Set Doppler Project (used by yarn start but there are also specific launcher commands)
  ```sh
  doppler setup
  ```  

That's it!  You're ready issue yarn install and yarn start to fire it up.

### Authentication
Authentication is done via Auth0.  It will require log in to use the app at all.  Configure your users/database/social logins via Auth0.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.

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

* Matt Nieland: matt.nieland@gmail.com
* Project Link: [https://github.com/mattnieland/InfoTrackSEO.Web](https://github.com/mattnieland/InfoTrackSEO.Web)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)
* https://hodo.dev/posts/post-03-dynamic-filter-ef for Dynamic Filtering code
* https://www.c-sharpcorner.com/blogs/rate-limiting-in-net-60 for rate limiting logic

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/mattnieland/InfoTrackSEO/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/mattnieland/InfoTrackSEO/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/mattnieland/InfoTrackSEO/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/mattnieland/InfoTrackSEO/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/mattnieland/InfoTrackSEO/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/mattnieland
[product-screenshot]: images/screenshot.png
[token]: images/token.png
[Docker]: https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=Docker
[Docker-url]: https://www.docker.com
[Auth0]: https://img.shields.io/badge/Auth0-000000?style=for-the-badge&logo=Auth0
[Auth0-url]: https://auth0.com
[Doppler]: https://img.shields.io/badge/Doppler-000000?style=for-the-badge
[Doppler-url]: https://www.doppler.com
[Sentry]: https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=Sentry
[Sentry-url]: https://sentry.io
