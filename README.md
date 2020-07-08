
# Cypress

------------



###overview

Cypress is a next generation JavaScript-based front end testing tool built for the modern web.This enables you to write faster, easier and more reliable tests. Cypress can be also understood as an end-to-end testing framework based on JavaScript, which comes with various inbuilt features.


------------


### Installation Prerequisite:
In order to install cypress, we need to have below things as prerequisite:
- NodeJS
- NPM

------------



### Installing Cypress

- Create a folder where all our code will resides.
From here on, we will be working inside the editor: Visual Studio Code.
launch the Visual Studio Code and open the folder that we created.



- Let’s start by creating the package.json.
open a terminal and run npm init -y (open a terminal inside Visual Studio Code as this is the best way to run commands and edit code at the same time)

- Using the npm command, we’ve created a package.json, which initializes the folder to be ready for npm commands.

- What is NPM?
It’s JavaScript’s package manager.
If you come from Java, it’s the equivalent of Maven
NPM comes built-in with NodeJS, so you don’t have to install it. And it has all these hundreds of of packages in it, all available for installation.
So, let’s install Cypress.
open a terminal and run npm install cypress
And…thats it! Cypress is installing.



- Now let’s run cypress.
Yes, we currently don’t have tests, but we need to run it once so that it can create lots of folders with stuff that we’ll need.
So, let’s run it. To run a package command locally, one needs to use npx.
open a terminal and run npx cypress open

- Cypress installed a “local command”, called, obviously, “cypress”, which we run using npx. we ran npx cypress, asked it to open, and it opened the UI, and told us it created a folder structure for us.
Now let’s close the run window and look at what it did:

- It created a folder called “cypress” with lots of sub-folders inside it.
The most important one is “integration” — this is where we write out tests.
It made us some example tests for our use.

That’s all. Now we’re ready to write our first test!


## Write and run the first Test
We’ve installed Cypress, so we can now run our first test.

To write our first test, we’ll create a file inside the “integration” folder and write the test code inside it.

We right-click to create a new file and we will call it “Test.spec.js”.

But before we start writing the code itself, and since I’m using Visual Studio Code, we want some autocomplete support for Cypress.

So  do the following at the top of the file:
`    /// <reference types="cypress" />`

This triple comment line will tell VS Code for which package it needs autocomplete support for.

To write a test, we need a test runner, and we’ll be using a test runner called Mocha

Mocha comes built-in with Cypress, so we don’t need to install it. Moreover, it’s the only test runner that comes with Cypress. You must use it.

Okay, to write a test, we write it inside an it function, like this

    /// <reference types="cypress" />
    it('should navigate to the application', () => {
      cy.visit('http://automationpractice.com/index.php’)
    ')
    })
Yup. And what does this test do? It just visits our app, and well, that’s it!
Let’s try and run it, again using npx cypress open:

    npx cypress open


Yes! It ran! And passed. 
