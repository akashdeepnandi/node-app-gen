<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
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

<!-- [![Contributors][contributors-shield]][contributors-url] -->

![npm](https://img.shields.io/npm/v/node-app-gen?style=for-the-badge)
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
![NPM](https://img.shields.io/npm/l/node-app-gen?style=for-the-badge)
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/akashdeepnandi/node-app-gen"></a> -->

  <h3 align="center">node-app-gen</h3>

  <p align="center">
    A node.js app generator with project templates such as express server with TypeScript, express server with Vanilla JavaScript.
    <br />
    <!-- <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a> -->
    <br />
    <!--<br />
     <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    · -->
    <a href="https://github.com/akashdeepnandi/node-app-gen/issues">Report Bug</a>
    ·
    <a href="https://github.com/akashdeepnandi/node-app-gen/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
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
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
		 <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

So this is more like helper project which I required for my use case but decided to share it with community. Setting up TypeScript, ts-node and tslint is a bit complicated and repeative process we go over and over again when we want to scaffold a simple node application. So this project is built with an object to incrementally add most used node app templates with best practices set by default. I am open to the idea of others collaboration, find contact below.

### Built With

This uses Javascript file as an node script for using it as CLI tool.

- [inquirer](https://www.npmjs.com/package/inquirer)
- [node fs module](https://nodejs.org/api/fs.html)

<!-- GETTING STARTED -->

## Getting Started

The following steps are all you need to use this package for generating your favourite node project.

### Prerequisites

Node.js and npm must be installed, you check their version using

- node
  ```sh
  node -v
  ```
- npm
  ```sh
  npm -v
  ```

### Usage

You can use this package by installing it globally or you may use npx as well.

- Global install (You might need to add sudo in \*nix systems)
  ```sh
  npm i -g node-app-gen
  # or
  yarn add -g node-app-gen
  # then use
  node-app-gen
  ```
- npx (Recommended way)
  ```sh
  npx node-app-gen
  ```

You will be propmpted with these questions

- Project template
<p align="center">
<img src="https://raw.githubusercontent.com/akashdeepnandi/image-bucket/main/node-app-gen/step1.png" alt="Logo"></p>

- Project Name
<p align="center">
<img src="https://raw.githubusercontent.com/akashdeepnandi/image-bucket/main/node-app-gen/step2.png" alt="Logo"></p>

Open the project with your favourite code editor

<p align="center">
<img src="https://raw.githubusercontent.com/akashdeepnandi/image-bucket/main/node-app-gen/step3.png" alt="Logo"></p>

## Roadmap

I will be adding new templates incrementally and setup github actions to update with package dependencies after breaking changes.
See the [open issues](https://github.com/akashdeepnandi/node-app-gen/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Akashdeep Nandi - [@akashdeepnandi](https://www.linkedin.com/in/akashdeepnandi)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [Font Awesome](https://fontawesome.com)
- [README Template](https://github.com/othneildrew/Best-README-Template)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/akashdeepnandi/node-app-gen.svg?style=for-the-badge
[contributors-url]: https://github.com/akashdeepnandi/node-app-gen/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/akashdeepnandi/node-app-gen.svg?style=for-the-badge
[forks-url]: https://github.com/akashdeepnandi/node-app-gen/network/members
[stars-shield]: https://img.shields.io/github/stars/akashdeepnandi/node-app-gen.svg?style=for-the-badge
[stars-url]: https://github.com/akashdeepnandi/node-app-gen/stargazers
[issues-shield]: https://img.shields.io/github/issues/akashdeepnandi/node-app-gen.svg?style=for-the-badge
[issues-url]: https://github.com/akashdeepnandi/node-app-gen/issues
[license-shield]: https://img.shields.io/github/license/akashdeepnandi/node-app-gen.svg?style=for-the-badge
[license-url]: https://github.com/akashdeepnandi/node-app-gen/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/akashdeepnandi
[product-screenshot]: images/screenshot.png
