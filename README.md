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
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">Sorting Visualiser</h3>

  <p align="center">
    Visualise and benchmark sorting algorithms
    <br />
    <a href="https://sort-visualise.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/mihai10001/sorting_visualiser/issues">Report Bug</a>
    ·
    <a href="https://github.com/mihai10001/sorting_visualiser/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Components</a></li>
        <li><a href="#components">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![Sorting-visualiser][product-screenshot]](https://sort-visualise.herokuapp.com/)

This is a web application created to visualise all sorts of sorting algorithms and to benchmark them in order to be able to compare them

What it does:
* Lets the user choose between a list of implemented sorting algorithms
* Lets the user customise the application behaviour by modifying given settings
* Visualise results, directly on canvas or having charts (ex. pie-chart) and table results

How it does it:
* All sorting algorithms are implemented in place, so that the input array reference is shared between the UI component that renders the animated charts and the sorting algorithm function (mutable array). This allows real-time drawing, as the UI gets re-rendered automatically if the internal representation of any input variable changes (array in this case) - see Angular Change Detection and how it is triggered for more information

### Components

I've tried to create this application as modular as possible, by creating loosely-coupled interactions between components using services and RxJS in Angular

Here is a list of components (main-layout deals with rendering the needed components):
* [Sorting selection](sorting-visualiser/src/app/main-layout/sorting-selector)
* [Modular sorting chart/canvas](sorting-visualiser/src/app/main-layout/sorting-chart)
* [Settings](sorting-visualiser/src/app/main-layout/settings)
* Results:
    * [Bar chart](sorting-visualiser/src/app/main-layout/results/bar-chart)
    * [Line chart](sorting-visualiser/src/app/main-layout/results/line-chart)
    * [Pie chart](sorting-visualiser/src/app/main-layout/results/pie-chart)
    * [Table](sorting-visualiser/src/app/main-layout/results/table)
    * [Loading HoC](sorting-visualiser/src/app/main-layout/results/loading-wrapper)

### Built With

Frameworks:
* [Angular](https://angular.io/)
* [Angular Material](https://material.angular.io/)

Libraries / plugins / add-ons / toolkits:
* [Ng2-Charts](https://valor-software.com/ng2-charts/)
* [Ngx-color-picker](https://www.npmjs.com/package/ngx-color-picker)
* [Boostrap](https://getbootstrap.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

A list of prerequisites in order to run the project:
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mihai10001/sorting_visualiser.git
   ```
2. From the root folder
   ```sh
   cd ./sorting-visualiser
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run the application with NPM
   ```sh
   npm run start
   ```


### Docker

If you prefer using Docker, you can build and run the application using the following commands:
   ```sh
   docker build -t sorting-visualiser .
   docker run -d sorting-visualiser
   ```


<!-- USAGE EXAMPLES -->
## Usage

Pick a list of sorting algorithms from the selection dropdown, and press the Play button

Customise any preferred settings from the settings area

Please feel free to add new sorting algorithms by modifying [this file](sorting-visualiser/src/app/sorting-functions.ts).
If you want results displayed, follow the interface for defining a sorting function from the file above, and return a Results object at the end of the function


<!-- ROADMAP -->
## Roadmap

Version 2.0
* Will contain many more sorting algorithms
* Will fix the delay logic that biases algorithms by swaps (rather by swaps and comparisons)
* Might defer the sorthing algorithms execution to different threads (web-workers) to alleviate processes running on the main UI thread

Version 3.0
* Maybe will find a way to implement algorithms that are not sorted in place

See the [open issues](https://github.com/mihai10001/sorting_visualiser/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Feel free to reuse any of the code from this project. Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

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

Iliuta Mihai-Victor - rvivits@gmail.com

Project Link: [https://github.com/mihai10001/sorting_visualiser](https://github.com/mihai10001/sorting_visualiser)

It is one of the projects I've always wanted to create because it ties together knowledge from many areas I'm interested in, such as algorithms, benchmarking, animations and UI interactions, etc.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mihai10001/sorting_visualiser.svg?style=for-the-badge
[contributors-url]: https://github.com/mihai10001/sorting_visualiser/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/mihai10001/sorting_visualiser.svg?style=for-the-badge
[stars-url]: https://github.com/mihai10001/sorting_visualiser/stargazers
[license-shield]: https://img.shields.io/github/license/mihai10001/sorting_visualiser.svg?style=for-the-badge
[license-url]: https://github.com/mihai10001/sorting_visualiser/blob/main/LICENSE.txt
[product-screenshot]: images/screenshot.png
