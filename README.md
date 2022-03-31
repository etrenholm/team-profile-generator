# Team Profile Generator

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [References](#references)
* [Process](#process)
* [Results](#results)
* [Credit](#credit)

## Description
Create a command-line application that a manager can use to generate a team profile webpage. This webpage will display their team's basic info so the manager has quick access to their emails and GitHub profiles.

## Installation
To install this application, type “npm install" in the command line.

## Usage
To run this application and generate your readme, type "node index.js" in the command line.

## Technologies
Project was updated using:
* VS Code
* HTML
* CSS
* JavaScript
* Node.js
* Jest
* Terminal
* Git
* GitHub

## References
* [Inquirer Node Package](https://www.npmjs.com/package/inquirer)
* [Jest](https://jestjs.io/docs/getting-started)
* [File System Module](https://nodejs.org/api/fs.html#file-system)

## Process
### STEP 1. - SETUP
* Created GitHub Repository with a unique name.
* Pushed first commit of files into the new Repo using Git.
* Organized folder and fil directory structure.

### STEP 2. - CREATE CLASSES
* Created Employee, Manager, Engineer, and Intern objects which contained constructor properties and methods
* Used Jest to test functionality of Employee, Manager, Engineer, and Intern objects
* Exported Employee, Manager, Engineer, and Intern classes to the module

### STEP 3. - CREATE STYLES AND HTML TEMPLATE
* Created an HTML template and CSS Styles

### STEP 4. - CREATE FUNCTIONALITY
* Used inquirer to prompt questions, gather user input, and push new objects into an array
* Used the File System module to generate the new file with user input data and write the file to the appropriate file path
* Created a function which exported the entire page and returned HTML template
* Iterated through user input data and used an if statement return appropriate HTML cards for Manager, Engineer, or Intern.

### STEP 5. - FINALIZE
* Made various commits throughout process to save progress
* Recorded video to show how to run the application
* Made tweaks and finished README.md

## Results
* [Video Link](https://drive.google.com/file/d/1GlBgLokaqhxv8rOMBAhlfELiEGDGq6NP/view)
* [GitHub Repository](https://github.com/etrenholm/team-profile-generator)

![mockup]()

## Credit
Erica Trenholm: https://github.com/etrenholm

### ©️ March 2022