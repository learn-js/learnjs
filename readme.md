# Learn.js
> A guidebook to building projects with javascript.

Like the book? You can purchase it at [learnjs.io](http://learnjs.io).



# Introduction 

## Thank you. 

You believed in this project enough to get involved early, and your support is making it possible. The first release of _Learn.js_ went out on May 23, 2013. If you've purchased the book you are a serious early adopter, and that's awesome.

Because you got the book so early, you're in a unique position to guide the direction of the book. If there are particular libraries, development tools, or programming patterns that you'd like to see covered, please submit your thoughts at the learnjs issue queue on GitHub, or email me at hi@learnjs.io.

This book is highly inspired by the lean publishing model ([read more about it](https://leanpub.com/manifesto)) proposed by Peter Armstrong, founder of leanpub.com. I'm releasing the book early to get feedback from you, dear readers, so that together we can make the best book about javascript tools and libraries possible.

This book is looking pretty sparse right now at v0.1.0, but I'll be releasing updates weekly up until the book is feature-complete at v1.0.0. Help me determine what it will mean for the book to be feature-complete by filling out a survey asking what development tools, libraries, and programming patterns you'd be most interested in seeing covered.

The goal: produce a book of roughly 200 pages by the end of July. You're a big part of making that goal real. Thank you.


## Target audience
This book is meant for javascript beginners, but will be useful for anyone that wants to broaden their understanding of javascript. Maybe you've written with jQuery for years and want to get an introduction to server-side code, mapping, or data visualization. Or maybe you've created client-side applications without the use of any development tools like bower, browserify, or grunt, and you want to streamline your development process.

_Learn.js_ will introduce you to a wide range of tools and libraries, and whether you're a beginner or intermediate programmer, you're likely to find helpful material.

## Development tools
The development tools for javascript have changed rapidly in recent years, and the popularity of server-side javascript has matured tools available for client-side developers.

Learning development tools is one of the most difficult parts of starting to work with a programming language. 

Which tools should I use? Are there best practices for workflows? How should I test code?

There are many possible answers to the above questions, and this book won't give all of them, but because it will be a living document that is revised based on changing patterns and practices in the javascript world, we'll be able to create a guide that remains relevant.

### Development tools the book will cover:
- npm, the package manager for node.js, which is also often used for client-side javascript modules.
- bower and component, two package management tools for client-side javascript.
- browserify, a tool for bundling client side code as node-style modules.
- grunt, a build tool that can automate repetitive development tasks.
- Chrome developer tools.
- Git and GitHub. This book won't be a full guide to git, but it will help you improve as a git user.
- Vagrant and Virtualbox. Using these tools you can set up an instance of a linux operating system on your Mac or Windows machine and interact with it from the command line.
- Phonegap/Cordova. This project allows developers to create mobile apps for multiple platforms based on one js/html/css codebase.
- Hosting using Heroku and GitHub pages.
- And other tools. [Let us know what you'd like to see covered](http://hi@learnjs.io).


## Libraries
There are many different libraries available to javascript developers. It takes time just to learn how to find and use javascript libraries, how to tell which libraries will be effective and reliable, and when not to use a library.

We'll show you the best places to look for javascript libraries, the best resources for keeping track of new releases of libraries, and where to go when you need help learning a new library.

_Learn.js_ will cover client-side libraries as well as node.js modules, and explore opportunities for using libraries that work on both the client and the server.

### Some of the javascript libraries the book will cover:
- jQuery.
- leaflet.js, mapbox.js, gmaps.js, etc.
- d3.js, chart.js, raphael.js, and vega.js.
- pixi.js, voxel.js, and processing.js.
- And other libraries. [Let us know what you'd like to see covered](http://hi@learnjs.io).

## Programming patterns
Javascript is a very flexible language that can be employed using a number of styles and patterns. In this book we'll take a look at some of the most popular patterns, and develop a simple, clean coding style based on popular open-source style guides already available in the community.

### Some coding styles and programming patterns the book will cover:
- CommonJS and ECMAScript 6 modules.
- Functional programming.
- Prototypal inheritance.
- Constructors.
- And other patterns. [Let us know what you'd like to see covered](http://hi@learnjs.io).


# THE BASICS

## In this section, we'll get started learning:

### Chrome's Developer Tools
All browsers include tools for evaluating, debugging, and auditing your code and your site's performance. This section will introduce you to the tools offered in the browser Chrome, and later in the book we'll go into these tools in more detail.

### Basic html and css
For many of our projects in this book, html and css will be kept as minimal as possible. This refresher will get you up to speed if you haven't worked with css or html much before.

### Javascript syntax, variables, data types, functions, and style guidelines
Here we'll go over the basic parts of javascript. We'll cover the equivalents of a programming language's grammar and punctuation, as well as the basic building blocks of javascript: strings, numbers, booleans, arrays, objects, and functions. We'll also briefly explore style guidelines for writing javascript that help will ensure your code is readable and maintainable for you and others.

### Node.js and npm
Server side javascript is a seriously awesome thing, and while this book will only give an introductory look at what's possible, we'll be using many command line tools based on node.js that are installable using `npm`, node's package manager.

### Bower, browserify, and grunt
The command line tools we'll use most commonly in this book are bower, browserify, and grunt. Bower is a package manager for client-side javascript and css. Browserify is a tool that allows us to organize javascript in modules that work the same as node.js modules (and we can even use node modules in our browser code). Grunt is a build tool we'll use to automate repetitive tasks in javascript development. We'll combine bower, browserify, and grunt in the more complicated projects for awesome automation of our code.

### Git and GitHub
Git is a tool for tracking, sharing, and collaborating on versions of your code, and GitHub is the defacto resource for hosting code online. These are essential tools for anyone working on the web, and we'll use them in every part of the book.

### Testing javascript
Writing tests for your code does two things: ensure your code works as expected when changes are made, and provides examples of usage of your project. When applicable we'll write the tests for a project first, before writing the code that does the real work, and we'll describe later why this is a useful workflow.


# Hello, javascript. It's nice to meet you.

```
console.log('hello, javascript. it's nice to meet you');
```

Open up the browser Chrome.

> If you don't already have Chrome installed, download and install it now at [google.com/chrome](http://google.com/chrome)

Now, use this keyboard shortcut on a Mac: command + option + j
Or this for Windows/Linux: control + shift + j

You just opened the javascript console.

**Type in this code:**  
```
console.log('what is this?');
```

You just told the javascript console to print some text!

Any time you put `console.log()` in javascript code that is ran in the browser, whatever you put between the parentheses will show up in your browser's javascript console.

As you learn javascript, `console.log()` will be your best friend. You will use it to help prototype new functionality and to debug your code.

## Your first challenge:

Type this into the console:

```
console.error('this is an error');
```

That's an error! Note how it shows up in red. Look in the bottom right corner of the browser. You'll see a little red circle with an x in the middle, and a number on its right side. That's a helpful little indicator of errors in your javascript, and any time something is wonky with your code that red circle will show up.

With most errors you'll also be able to see a line number from your javascript file, which will help you pinpoint the offending code. We'll get into errors and debugging in more detail later in the book.

## Chrome Developer Tools
The javascript console is just one of the tools available for web development inside of Chrome. For this book we will focus on using Chrome and its developer tools for two reasons: Chrome has a a set of versatile and powerful tools, and focusing on the tools of one browser helps keep the instructions simple.

Expect to learn more about Chrome's Developer Tools throughout the book. Check out the [Browser Developer Tools](TODO) section in the appendix for more information about similar tools in other browsers and more resources for learning about these types of tools.

## Recap! We learned that:
- the javascript console and learned that we can type in javascript!
- we can use code like `console.log()` and `console.error()` to print information to the console.
- Chrome has a lot of useful tools, and later in the book we'll learn how they can help with experimenting with code, auditing the performance of our site, investigating the information sent between the browser and the server, and more.


# HTML & CSS: an introduction

If you're new to building projects for the web, knowing javascript alone won't be enough.

This book focuses on javascript, but you'll certainly pick up some html and css along the way.

You might find it useful to learn about html and css before reading Learn.js, or to have a resource handy that you can refer to when introduced to new html elements or css properties.

## But here's a quick refresher to get you started:

An example of an html element:

```
<h1>This is a headline</h1>
```

That's an `h1` element. It is used for the most prominent headline of a document – often the site title or article title. Note that this element has an opening tag, `<h1>, and a closing tag, `</h1`>, which looks the same except it has a forward slash, `/`.

This is a common pattern for html elements. There are a few html elements that don't require closing tags. Like these:

```
<br>
```

The `br` element creates a line break in text.

```
<hr>
```

The `hr` element creates a horizontal rule, a straight line, across your web site. Usually used as a break between sections.

```
<img src="image.jpg" alt="this is the alt text of an image" />
```

The `img` element is a little unique. Note that it has a `src` attribute that specifies the image we want to have show up, and an `alt` attribute that provides text that will be displayed for screen readers, or that might be used as a caption. The `img` element is also a self-closing tag, meaning it has a forward-slash before the closing angle bracket.


## HTML attributes and CSS selectors.
We just saw the `src` and `alt` attributes on the `img` element. There are many attributes that can be used on any given html element. Some attributes control behavior of the element, some are used as selectors for css rules.

**Here are the two attributes most used as selectors in css rules:**

### `id`

Using the `id` attribute of an html tag looks like this:

```
<p id="introduction">This is the first paragraph of a story.</p>
```

Here we're marking a paragraph (a `p` element) as being the introduction. The `id` of `introduction` should only be used on one html element, making this one `p` element special.

We do this so that later, in the css, we can give the `introduction` different styling than the rest of the `p` elements on the page.

Here's some css that makes the `introduction` italic:

```
p#introduction {
  font-style: italic;
}
```

We don't have to include the `p` in `p#introduction`, but it's useful for clarity. Note the hash mark: `#`. `id` attributes are identified in css by using a `#`.

### `class`
Now, let's say that we want some of the paragraphs in our story to have a different background color to highlight them. One way of accomplishing this would be to add a `class` to these paragraphs.

The use of `class` attributes looks like this:

```
<p class="highlight">This paragraph will be bold and slightly bigger.</p>
```

We've given this `p` element a class of `highlight`, so let's add some css that gives this paragraph a yellow background.

```
p.highlight {
  background-color: yellow;
}
```

One of the differences between `id` and `class` attributes, is that a `class` can be given to multiple elements on a page, whereas an `id` should be unique to one element. So we can give this class to multiple paragraphs to make them highlighted.


### Where does the css go?
There are two options: include separate css files, or place css directly in your html file. In almost all situations, including a separate css file for your styles will be a faster and more organized option.

Here's what it looks like to embed css in your html file.

```
<!DOCTYPE html>
<html>
<head>

  <title>Your website</title>

  <style>

    p.highlight {
      background-color: yellow;
    }

  </style>

</head>
<body>

</body>
</html>
```

You'll add your css between the opening and closing `style` tags, which should in turn go between the opening and closing tags of the `head` element.

But the cleaner option is to create a separate css file that you reference from your html file:

```
<!DOCTYPE html>
<html>
<head>

  <title>Your website</title>

  <link rel="stylesheet" href="style.css" />

</head>
<body>

</body>
</html>
```

This tells the browser to load the css from the `styles.css` file. Having a separate file for your styles helps with keeping your site easy to maintain. Having everything in one big html file can be a pain to work on.

### So where will the javascript be in an html file?

Just as with css, there are a couple options for where you place your javascript code.

You can embed it in your html file between opening and closing `script` tags:

```
<!DOCTYPE html>
<html>
<head>

  <title>Your website</title>

</head>
<body>


<script>
console.log('this is javascript');
</script>

</body>
</html>
```

Or you can use a `script` tag to reference an external javascript file:

```
<!DOCTYPE html>
<html>
<head>

  <title>Your website</title>

</head>
<body>


<script src="site.js"></script>

</body>
</html>
```

Note that the `script` element needs a closing tag even though there's nothing between the opening tag and closing tag.

Just like with css, it's better to keep your javascript in a separate files. By separating the types of code in your project you make it easier for yourself and for others to figure out how to make changes. The more organized your project is, the quicker you can revise its design and functionality.

### Layout with html and css
There are a few common tags used for laying out an html document. Check out this example:

```
<!DOCTYPE html>
<html>
<head>

<title>Your website</title>

</head>
<body>

<header>
    <h1>Your website</h1>
</header>

<main>
  <p>This is the content of your website</p>
</main>

<footer>
  <p>Contact: your info.</p>
</footer>

</body>
</html>
```

We're using the `header` element for the header of the page, the `main` element for the content of the page, and the `footer` element for supplementary information that goes in the footer. All three of these tags are relatively new as part of html5. Another new tag is 'section'. You might use it to break up your main content into parts:

```
<main>
  <section id="part-one">
    <h1>Section one</h1>
    <p>This is the content of the first section</p>
  </section>

  <section id="part-two">
    <h1>Section two</h1>
    <p>This is the content of the second section</p>
  </section>
</main>
```

The `section` element is for breaking up your web page into distinct sections. Note that I've got `h1` tags in each of the sections as headers. In html5 anytime you create a new `section` you're allowed to start a new heirarchy of header tags.

Where `section` elements are for specifying blocks of content on your page in a semantic way, 'div' elements are used primarily for the positioning and alignment of your content. For example, you might want to use a `div` to act as a container that restricts the width of your content:

```
<section id="part-one">
  <div class="container">
    <h1>Section one</h1>
    <p>This is the content of the first section</p>
  </div>
</section>
```

With css like below you can have the `section` tag the full width of the page while the container stays centered at 800 pixels.

```
.container {
  width: 800px;
  margin: 0px auto 0px auto;
}
```

The `div` is centered by using `auto` for the left and right margins (the order goes top, right, bottom, left).

### More resources
This gives you an intro to some of the html and css concepts we'll use most often in the book. 

#### To learn html and css in more depth, check out these resources:
**[Don't Fear The Internet](http://www.dontfeartheinternet.com/)**  
This is a wonderful introduction to html and css. Watch, enjoy, and follow along.

**[Web fundamentals track at codecademy.com](http://www.codecademy.com/tracks/web)**  
After you've had your fears eased by Don't Fear The Internet, check out the codecademy.com web fundamentals course. It'll get you some nitty gritty experience with the basics.

**[Mozilla Documentation](https://developer.mozilla.org/en-US/)**  
Have a question about some css property or html element? The Mozilla Developer Network has awesome documentation. If you're searching on google.com for anything css/html/js related, add the abbreviation "mdn" to your search query to see results from Mozilla Documentation. This site also has a bunch of introductory tutorials that are really useful.

**[WebPlatform.org](http://www.webplatform.org/)**  
This is a newer resource, but a good one. It's got a great design and well-organized resources.



# getting started with node.

Node.js is server-side javascript. It is well-suited to real-time applications and systems that are heavy on input and output. You can use it to create web servers, to manage information in databases, to build real-time communication tools, and more.

## In this book, we'll use node in these ways:
- Install command line tools available through node's package manager, `npm`.
- Create basic web servers to serve static content to our web browser.
- Experiment with real-time, multi-user applications.

## To learn node in detail, read these resources in this order:
- [art of node](https://github.com/maxogden/art-of-node)
- [streams handbook](https://github.com/substack/stream-handbook)

## Install node:

There are a few options for this, and I've put them in my order of preference:

### Use nvm to manage node versions.
This option gives you the most control, allows you to switch between versions of node similar to using rvm or rbenv for Ruby. [Get nvm here](https://github.com/creationix/nvm).

### Install using a package manager. 
This is a good option, but sometimes package managers can be out of date. If the node version you'll be using matters for your project, you should make sure that the version in the package manager works for you. [Check out a list of package manager instructions here][https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager].

### Download an installer from nodejs.org.
[Here's the node.js download page][nodejs.org/download].

Installing node gives us the node package manager `npm`. We'll use it to install grunt-cli, which is the command-line tool that is used to run grunt tasks. 

> _This section of the book is still a work in progress. Make suggestions at [github.com/learn-js/learnjs/issues](http://github.com/learn-js/learnjs/issues).


# Introduction to git & GitHub

Developing websites and applications without using git is equivalent to writing in Microsoft Word without ever saving your work.

**Use git.**

Git is a version control system, which means it can track every change you make to your code. This allows you to review and edit past versions if you mess something up. And it allows you to figure out when errors were introduced to the code.

There are many other bonuses to using git, which are mostly out of this book's scope.

The best way to start learning git (and GitHub) is to visit [try.github.com](http://try.github.com).

## Get on GitHub
If you haven't already, create an account at [github.com](http://github.com).

GitHub is a great place to host your code. Many employers hiring for developer and designer positions will ask for a GitHub profile, and they'll use your GitHub activity as part of the criteria in their decision-making process.

In fact, if you're looking to get a job with a particular company, try to find _their_ GitHub profile and start contributing to their open source projects. This will help you stand out, and they'll already know your technical abilities based on your open source contributions. That's a big win.

GitHub has become the de facto code hosting service for most open source communities.

## Create a site for yourself using GitHub

GitHub has a useful service called [GitHub Pages](http://pages.github.com) that allows you to host a simple site on their servers for free.

### With GitHub Pages you can:
- design a website any way you want by having complete control over the html, css, and javascript.
- use simple templates for getting started using GitHub Pages.
- create sites for yourself and all of your projects hosted on GitHub.
- use a custom domain name if you want!

Visit the [help section for GitHub Pages](https://help.github.com/categories/20/articles) to learn more details about hosting sites on GitHub.

> _This section of the book is still a work in progress. Make suggestions at [github.com/learn-js/learnjs/issues](http://github.com/learn-js/learnjs/issues).


# Introduction to browserify.

There's all this wonderful code on `npm`, the node.js package manager.

What if we could use that code in the browser?

## Hey, we can. Use browserify.

With [browserify](https://github.com/substack/node-browserify), we can use some core node modules and many of the thousands of modules on `npm` in our browser-side code.

We can also write our browser-side javascript in the node.js style by using `require`.

Install browserify:

```
npm install -g browserify
```

We use the `-g` option to install browserify globally on your machine, allowing you to use it on the command line.

### Brief example:

```
// require the core node events module
var EventEmitter = require('events').EventEmitter;

//create a new event emitter
var emitter = new EventEmitter;

// set up a listener for the event
emitter.on('pizza', function(message){
  console.log(message);
});

// emit an event
emitter.emit('pizza', 'pizza is extremely yummy');
```

Put the above code in a file named index.js.

Now, to be able to run this code in the browser, enter this command in the terminal:

```
browserify index.js > bundle.js
```

The bundle.js file now has your event emitter code along with any dependencies on core node modules and shims to make them work in the browser.

You can include bundle.js in your html now like any other javascript file.

Example:

```
<!DOCTYPE html>
<html>
<head>
  <title>node / browserify example</title>
</head>
<body>

<script src="./bundle.js"></script>
</body>
</html>
```

That's it! Now you can use node modules and `require` in the browser!

## Live reload development environment
If you're in the middle of writing code, you'll find running `browserify` in the terminal to regenerate bundle.js, then refreshing the browser to be time-consuming and annoying.

**Enter beefy!**

`beefy` is a command-line tool for automatically generating and serving your browserify bundles as you develop. Each time you save your javascript file `beefy` will regenerate bundle.js and refresh the browser automatically.

Install beefy:

```
npm install -g beefy
```

Now, run this:

```
beefy index.js:bundle.js --live
```

The `--live` option enables the live reload functionality of beefy.

This will by default serve your index.html file at http://localhost:9966. Open Chrome, enter that url, then open the javascript console by using the keyboard shortcut `command+option+j`.

You'll see `pizza is extremely yummy` in the javascript console!


# Introduction to grunt.js

Grunt is a tool for managing the javascript, css, and html files of your web project. Grunt is a task manager similar to Ruby's `rake`. You can run any arbitrary tasks you want, and there are a number of grunt plugins that make it easy to set up common tasks. Grunt is useful for running tests or for build steps, including turning sass, stylus, or less files into css, concatenating files, or creating .zip or .tar.gz packages of your project.

### Outline of the steps in this tutorial:

-   Install node.
-   Install grunt-cli.
-   Setup project.
-   Set up package.json.
-   Create Gruntfile.js.
-   Run grunt tasks.
-   Make an awesome project.

### Install node:

There are a few options for this, and I've put them in my order of preference:

**Use nvm to manage node versions** This option gives you the most control, allows you to switch between versions of node similar to using rvm or rbenv for Ruby. [Get nvm here](https://github.com/creationix/nvm).

**Install using a package manager.** This is a good option, but sometimes package managers can be out of date. If the node version you'll be using matters for your project, you should make sure that the version in the package manager works for you. [Check out a list of package manager instructions here][https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager].

**Download an installer from nodejs.org.
**[Here's the node.js download page][nodejs.org/download].

Installing node gives us the node package manager `npm`. We'll use it to install grunt-cli, which is the command-line tool that is used to run grunt tasks. 

**Run this in your terminal after installing node.js:**

```
npm intall -g grunt-cli
```

This installs the grunt command-line tool globally on your machine. Now you can run the `grunt `command!

And, it won't do anything.

Bummer. **But it will give you a message like this**:

```
grunt-cli: The grunt command line interface. (v0.1.6)
  Fatal error: Unable to find local grunt.
  If you're seeing this message, either a Gruntfile wasn't found or grunt hasn't been installed locally to your project. For more information about installing and configuring grunt, please see the Getting Started guide: [http://gruntjs.com/getting-started](http://gruntjs.com/getting-started)
```

The grunt command looks for a locally installed version of grunt, which you can include in your project as a development dependency in a package.json file.

### Hey, package.json files are cool.

You can use a package.json file for a lot of useful purposes. Primarily, it's used to list your project's dependencies on npm packages, as well as list the name, description, version, and source repository of the project. You can specify the type of license, version of node the project requires, the project's contributors, and more. Check out [this interactive package.json cheatsheet][http://package.json.nodejitsu.com/] for a nice rundown on the basics.

So, our package.json will specify some development dependencies. 

**Some basic requirements:**

- We'll test the javascript with qunit.
- We'll write scss and compile it to css, then minify the css.
- We'll concatenate and uglify our javascript files.
- We'll use the `grunt watch` command to automatically run grunt tasks when files are edited.
- We'll want a little http server to check out our game as we're developing it. 

Some of the above requirements could be perceived as excessive, but they help make this a meaty and useful tutorial, so deal with it.

**So, we'll need to use some grunt plugins. We'll use these ones:**

- [grunt-contrib-qunit][https://github.com/gruntjs/grunt-contrib-qunit]
- [grunt-contrib-jshint][https://github.com/gruntjs/grunt-contrib-jshint]
- [grunt-contrib-connect][https://github.com/gruntjs/grunt-contrib-connect]
- [grunt-contrib-watch][https://github.com/gruntjs/grunt-contrib-watch]


**That means our package.json file will look like this:**

```
{ 
  "name": "your-project-name", 
  "version": "0.0.1", "author": "Super Big Tree <seth@superbigtree.com>", 
  "description": "A silly game.", 
  "repository": { 
    "type": "git", 
    "url": "https://github.com/your-profile/your-project-name.git" 
  }, 
  "devDependencies": { 
      "grunt": "~0.4.0",
      "grunt-contrib-qunit": "~0.2.0",
      "grunt-contrib-jshint": "~0.1.1",
      "grunt-contrib-connect": "~0.1.2",
      "grunt-contrib-watch": "~0.4.4"
}, 
 "license": "MIT", 
 "engines": { 
 "node": ">=0.8" 
 } 
}
```

**Go to your terminal. Create a folder that you want to serve as the project's folder:**

```
cd wherever/you/want/the/project/to/live
mkdir your-project-name
cd your-project-name
```

Now, create your package.json file:

```
touch package.json
```

Copy and paste the above package.json example into your package.json file using your favorite text editor. Save the file. **Now, you can run
this:**

```
npm install
```

to install all the dependencies.

If you run the command and get an error like this at the end, then something is not ok:

```
npm ERR! not ok code 0
```

There's an error of some kind that will need to be worked out. For me, typically the problem is that I messed up the syntax or put the wrong version number for a dependency, so check things like that first.

### Project setup:

Let's make all our files and folders now!

**This will make all the folders we want:**

```
> mkdir -p test js css/scss img
```

**This will make the files we want:**

```
touch js/player.js js/game.js js/enemies.js js/ui.js \
touch css/scss/main.scss css/scss/reset.scss css/scss/ui.scss \
touch test/player.js test/enemies.js test/game.js test/ui.js
```

Cool. Did that. **Now we make the Gruntfile:**

```
touch Gruntfile.js
```

**Open Gruntfile.js in your favorite editor and paste in this:**

```
module.exports = function(grunt) {
  grunt.initConfig({
    // and here we do some cool stuff
  });
};
```

The above code is the required wrapper code to make a Gruntfile work. Now, remember our package.json file. Buds, we can use the values from that file in our Gruntfile.

**Check it out: **Let's say we're making a javascript library and want to put stuff like the name, version, author, source repository, and license of the project in a multi-line comment at the top of the file. It would be a bummer to have to edit that by hand every time the file is compiled for a new release. Instead, we can use values from package.json in our Gruntfile!

First step is to read the contents of package.json by **putting this line in Gruntfile.js**:

```
pkg: grunt.file.readJSON('package.json');
```

A package.json file is just JSON, right? Yeah, so it's easy to get at the values to do cool stuff.

For fun, let's see what it takes to run a custom task inside a Gruntfile, and have it log some attributes from the package.json file. Alright? OK.

This is a really simple task that logs the package name and version to the console, shown here as the complete Gruntfile.js:

```
module.exports = function(grunt) {
  grunt.initConfig({
    // read the json file
    pkg: grunt.file.readJSON('package.json'),

    log: {
      // this is the name of the project in package.json
      name: '<%= pkg.name %>', 

      // the version of the project in package.json
      version: '<%= pkg.version %>' 
    }
  });

  grunt.registerMultiTask('log', 'Log project details.', function() {     
    // because this uses the registerMultiTask function it runs grunt.log.writeln()     
    // for each attribute in the above log: {} object     
    grunt.log.writeln(this.target + ': ' + this.data);   
  });
};
```

**You can now run your task on the command line!:**

```
grunt log
```


**You should get output like this:**

```
Running 'log:name' (log) task 
name: your-project-name
Running 'log:version' (log) task
version: 0.0.1
Done, without errors.
```

If you didn't get output like that, check your Gruntfile for typos. If you did get output like that: Awesome! So we've made it pretty far. We've set up a project with a bunch of files and folders, created a package.json file with a list of devDependencies, installed the dependencies, and tried out a simple Gruntfile for running arbitrary tasks.

If this seems like a lot, like it's beating up your brain, don't worry. After a few times of starting a project like this, these initial steps will get faster and easier. Heck, you might even create some kind of base project that you can build on with each new project so that you don't have to write the boilerplate every time. Or you could use a project like yeoman for its code generators. That's up to you, but when first learning this it's a reasonable idea to start from scratch and see how everything works.



# Introduction to functions.

## Eating, digesting, and pooping.

A function is a block of code that takes input, processes that input, and then produces output.

You can think of it like eating, digesting, and pooping.

And when we use a number of functions in succession, it's almost like that movie [The Human Centipede](http://www.imdb.com/title/tt1467304/), only less gross.

## Let's make a function named `eat`.

```
// take input / eat food
function eat(food){
  
  // process the input / digest the food
  var poop = digest(food);

  // send output / poop
  return poop;
}
```

The above example should make sense just from reading it.

Note that lines that start with `//` are comments, and they get ignored when the code is executed.

To create a function, we first write `function`. Next, we can name the function, and in this case it is named `eat`.

Inside of the parentheses we specify the input, which are also called arguments. We only have one argument in this case, named `food`.

Next, we use an opening curly bracket to indicate the beginning of the block of code connected with this function.

We create a variable named `poop`, which contains a "digested" form of the `food` argument. Here we're using another function named `digest` that is using the `food` argument as its own input. 

Finally, we `return poop;` so that the output of this function can be used in other parts of our code.

## Using the `eat` function:

We can use the `eat` function like this:

```
eat('pizza');
```

When we run this, it'll return something like `zpzia`, `apizz`, or `pzazi`.
You know, something random like that.

### So what is the `digest` function doing?

You've probably already guessed that it is a function that randomly shuffles letters in a string. In actual production projects you would want to name it something a little more clear, like`shuffleLetters()`.

Here's an example of the `shuffleLetters()` function using our food/poop language:

```
function digest(food){
  var food = food.split('')
  var digesting = food.length, digested, randomFoodPart;

  while (digesting) {

    randomFoodPart = Math.floor(Math.random() * digesting--);

    digested = food[digesting];

    food[digesting] = food[randomFoodPart];

    food[randomFoodPart] = digested;
  }

  var poop = food.join('');

  return poop;
}
```

_Adapted from [Mike Bostocks's Fischer-Yates Shuffle](http://bost.ocks.org/mike/shuffle)._

You're probably aware that this `digest` function is doing the heavy lifting, while the `eat` function is just a wrapper around `digest`.

If you were really modeling eating, digesting, and pooping using javascript functions, how would you do it?




# CHAPTER 0

## Write a function that adds numbers, and make it awesome.

### Our goals for chapter zero are simple:
- Get familiar with javascript syntax and data types.
- Write a function that does one task really well.
- Try out the Chrome javascript console
- Learn about debugging and refactoring code.

We'll be writing a function that adds numbers. Simple. Almost too easy. But think about it as if you were building a calculator. You'll need functions that add, subtract, multiply, and divide, and depending on the complexity of the calculator, maybe even more than that.

Our goal will be to create an add function that could be reused in various ways throughout our imaginary calculator program. We'll only make `add`, but if you want to experiment and actually make a calculator, that would be awesome! [Let me know how it goes](mailto:hi@learnjs.io).

### Writing javascript on paper.

**You want to write javascript? OK, here's what we'll do:**

- Take out a sheet of paper and a pen.
- Write the following on the paper:

```
var x = 1;  
var y = 2;  
var z = x + y;  
```

- Think about how easy this is and how it's awesome that you're coding with javascript on WHATEVER YOU WANT.

You know what happens when you write `x + y`.

You already know the value of `z`.

This looks just like math, and that's because it is.

Don't worry, writing code isn't all about math, but working with numbers is a big part of the work you'll be doing.

#### If the above is simple math, what's with the word `var`? What's that?  
The word `var` stands for variable. We use it only when creating a variable.
You might remember the concept of variables from math, too. In this case, `x` is just a name that refers to the number 1. Any time we want to create a variable in javascript, we write something like:

```
var nameOfTheVariable = 'whatever the variable should reference';
```

#### Why are there single quotes around the phrase `whatever the variable should reference`?  
Check out the `var x = 1;` statement above. There aren’t any quotes around the `1`. This is how we can tell numbers from text. In javascript (and most programming languages), text like this is called a **string**.

#### Wait, why did I just write that on paper?  
Asking you to write code on paper wasn't arbitrary. It's useful to think about code in different ways, especially in the abstract. Sometimes it takes brainstorming away from the computer to figure out solutions to difficult problems. Another perk to paper coding: your program doesn't have to run, so you can use *pseudocode*.

#### So, what's pseudocode?  
Here's a simple example:

```
if x is greater than 10, subtract 1 from x.  
```

Here's that pseudocode turned into javascript:

```
if (x > 10){  
  x = x - 1;  
}  
```

We won't go into `if` statements in detail here, but based on this pseudocode you should be able to tell what's happening in that javascript.

#### Pseudocode is awesome.
You can use pseudocode to experiment, and to define the outline of a program without worrying about errors or syntax details. It's a great way to start thinking about the structure of the code you're about to write.


### Now let's open up the web browser, Chrome, and do some experimenting.

> If you haven't installed Chrome yet, do so now at [google.com/chrome](http://google.com/chrome)

1. Open a Chrome window.
2. Go to [learnjs.io](http://learnjs.io).
3. Click **View**, in the top menu, hover over **Developer**, then click **Javascript Console**. (TODO: edit for windows, linux, and mac)

> You can also use a keyboard shortcut:
> command+option+j on mac (TODO: edit for windows, linux, and mac)

If you've used a terminal program on your computer, the javascript console is similar, except you write javascript instead of terminal commands.

### Important:
Any time there are code samples just type them straight into the javascript console, hit **Enter**, and see what happens. The best way to learn a programming language is to type it a lot. More than a lot.

In the console, type: 

```
var x = 10;
```

Hit enter, and you'll see the word `undefined` pop up below your line of javascript.
That's fine, it's normal. That's what the console returns when you enter such a statement.
To see the value of `x`, type `x` into the console.

The console should return the number `10`!


### Let's get functional.
Consider this pseudocode:

```
add two arbitrary numbers.
```

We're going to create a function in javascript that adds two numbers.

We've got a function named add, and it takes two arguments and adds them together. For now, we assume the arguments to be numbers.

To use the 'add' function, write something like this:

```
add(3, 7);
```

### Let's add with a function!

A function is a block of executable code, and when we give a function a name, like we do below, it can be used throughout your program. The benefit: define a function once rather than using similar blocks of code in multiple places in your program.

```
function add(x, y){
  return x + y;
}
```

Type the above `add` function into the javascript console, and use it to do some addition!

Important note: using Chrome's javascript console, if you hit **Enter** it will execute the code. To type a function like this onto multiple lines, hit **Shift + Enter** to add a line.

Just like with the variables we created earlier, when we first define a function in the console it will return `undefined` when you hit enter. This is normal.

Also: When you are in the javascript console you can hit the up arrow to revisit previous code that you've typed in.

**Try these examples:**

```
// add 2 and 4:
add(2, 4);

// create a variable named num and set its value to the sum of 3 and 4:
var num = add(3, 4);
```

### Hey, you made `num` equal the usage of the add function.
Heck yeah, buddy. Let's take a look at the definition of the function again:  

```
function add(x, y){
  return x + y;
}
```

Check out the middle line, `return x + y;`.

With most javascript programming, one of your goals should be to write small, simple functions that take arguments as input, modify that input, and output it using the return statement. Whatever a function returns is used elsewhere in your program.

When we make the variable `num` equal `add(3, 4)`, we're really setting `num` to equal the value that's returned from the add function. In this case, `add(3, 4)` will return the number 7, so that's what `num` references.

### Wait, what if I messed up the adder?

Hey, sorry to bother you, but somebody tried to use our add function like this:

```
add(‘1’, ‘5’);
```

Unsurprisingly, it didn’t work as expected. Can you guess what the add function returned?

It returned this: `’15’`.

### Why didn’t it add?
Those numbers had quotes around them. Numbers in javascript do not have quotes around them, only strings. Instead of adding numbers, our program combined two strings.

### Walking like a duck
Javascript is a dynamically-typed language. Remember how we created variables earlier that referenced specific values? Each value that a variable references has a type, and in javascript, you don't have to specify a type when you create a variable. You can change a variable's type later in the program, and you will interact with a variable in different ways depending on its type. Sometimes this is called duck typing. If the variable walks like a duck and talks like a duck, it is a duck.

#### Here are common types in javascript:

##### Boolean: true or false

**Example:**

```
var thisIsNotTrue = false;
var thisIsNotFalse = true;
```

Note that there are no quotes around the words `true` or `false`. The variable named `thisIsNotTrue` references the value `false`, and the variable named `thisIsNotFalse` references the value `true`.

##### Number: integer or float

**Example:**

```
var thisIsAnInteger = 123;
var thisIsAFloat = 3.14;
```

A float is a number with a decimal. An integer is a whole number – without a decimal.

##### String: text in quotes.

**Example:**

```
var thisIsAString = ‘you can tell because this text is inside of quotes’;
```

A string is any text inside of quotes. It can be single or double quotes, but it has to be the same on each end. This will work: `'text'`, and this will work: `"text"`, but this will not work: `'text"`.

### Back to our addition issue:

This usage of our function doesn’t work: `add(‘1’, ‘5’);`.

The reason? The `+` operator and the way it works with strings.

This little buddy does a little more than you might expect at first. It’ll add numbers together, but it’ll also add strings together. When that happens it’s called concatenation.

When we use the `add` function with `'1'` and `'5'` as arguments, it executes a statement like this:

```
return ‘1’ + ‘5’;
```

A string `+` a string equals those two strings combined. That’s concatenation. So `'1' + '5'` becomes `'15'`.

**Some examples:**

```
‘abc’ + ‘def’ // becomes ‘abcdef’
‘This is a ‘ + ‘string’ // becomes ‘This is a string’
‘1’ + ‘5’ // becomes ‘15’
```

Lets add some code to our `add` function to make sure this doesn’t happen. By converting the arguments of the function to numbers, we can allow for the possibility of adding numbers that happen to be strings!

```
function add(x, y) {
  return parseInt(x) + parseInt(y);
}
```

All we added was the usage of the `parseInt` function. This is a part of core javascript, and is used to convert strings and floats to integers. 

### Now we have a float issue.

Somebody tried to add some floats together, like this:

```
add(3.14, 7.28);
```

It did not work as expected. It returned `10`. That's because `parseInt` is only going to return the integer it finds in a string. So maybe `parseInt` isn't the best solution.

**There is an easy fix.** Revise your add function to look like this:

```
function add(x, y) {
  return parseFloat(x) + parseFloat(y);
}
```

Yep, that works. Now that we're using `parseFloat` instead of `parseInt`, decimal numbers stay intact.  Now `add(3.14, 6.28);` returns `9.42`.

### What about adding more than two numbers?

Somebody found a weird workaround for adding multiple numbers using this `add` function:

```
var a = add(1, 3);
var b = add(a, 7);
var c = add(b, 21);
```

That’s just sad. We can make this easier. Rewrite the add function to look like this:

```
function add() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++){
    total += parseFloat( arguments[i] );
  }
  return total;
}
```

Cool. Now we can pass any number of arguments to the `add` function and get the correct result!
With this change we can now pass any number of arguments to `add`, like this: 

```
add(1, 2, 3, 4, 5, 6, 7);
```

This makes `add` much more flexible than the previous workaround.

We used a `for` loop to cycle through all the arguments that are passed to `add`. We also used a variable named `total` to reference the sum of all arguments.

### Looper: cycling through a function's arguments
For loops are easy once you get used to them.

First we set a start value: `var i = 0`. That sets `i` to `0`, which makes our loop start at `0`.

Then compare that to an end value: `i < arguments.length`.
The statement `arguments.length` gives us the number of arguments. `length` returns the number of arguments. So, with usage like this: `add(1, 2, 3);`, `arguments.length` will return `3`.

As long as `i` is less than 3, the loop will run again.

Then we give the loop an increment value: `i++`. The `++` increases `i` by one with every loop.

This might be the point where you get a little overwhelmed if you are new to programming. If so, I recommend you practice things like `for` loops over at [codecademy.com](http://codecademy.com).  It's a great site for building foundational knowledge of javascript basics.

### One last problem: ‘one’.

That’s not a number. Can you guess what happens when someone tries to do this:

```
add(‘one’, ‘two’, 3);
```

Paste in the latest version of the `add` function to the Chrome javascript console. Then try out the above usage of `add`.

It should return something like this:

```
NaN
```

Let’s fix that. The problem: `NaN` means **not a number**. When we run `parseFloat` on a string like `’one’`, it returns `NaN`, and when we try to add `NaN` to a number, the whole sum becomes `NaN`.

There are a few possible solutions to this problem. Here are two:

#### Ignore any argument that is not a number.

```
function add() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++){
    if ( isNaN( parseFloat(arguments[i]) ) === false ) {
      total += parseFloat( arguments[i] );
    }
  }
  return total;
}
```

The new code that we added looks like this:

```
...
    if ( isNaN( parseFloat(arguments[i]) ) === false )  {
      ...
    }
...
```

The function `isNaN` checks to see if `parseFloat(arguments[i])` is a number. If `isNaN` returns false, then we know that the argument is a number.

This checks to see if an argument is a number, and if not, ignores it – but there’s still a problem with this. Ignoring values like `'one'` in our `add` function because it doesn't contain numbers is reasonable. The problem: this error fails silently. 

Any time there's a chance our function can fail because of misuse by yourself or another programmer, it's best for the code to send errors explaining why it fails. We want our code to complain when there is a problem.

Let's switch up our code so that if an argument is not a number, `add` throws an error, and if the argument _is_ a number, it gets added to the `total` variable.

```
function add() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++){
    if ( isNaN( parseFloat(arguments[i]) ) ) {
      throw new Error('Arguments to `add`  must be numbers.');
    } else {
      total += parseFloat( arguments[i] );
    }
  }
  return total;
}
```

Now, when we put that version of `add` into our javascript console and use it like this:

```
add('one', 2);
```

It'll return an error with this text:

```
Error: Arguments to `add` must be numbers.
```

Good, that was our goal. Now any strings that can't be converted to numbers will result in this clear error rather than being ignored.

### Here is what we covered:

#### Chrome javascript console
We started using Chrome's javascript console in a really basic way as preparation for upcoming chapters.

#### Basic data types
We covered the basics of strings, numbers, and booleans.

#### Writing functions.
We went over the basics of writing a simple function.

#### Refactoring code.
As we wrote and experimented use cases of the `add` function we identified ways it could be improved and rewrote the function to guard against mistakes.

#### Debugging and useful errors.
As you're getting started it probably feels like errors are just something to avoid. But, if we can embed useful errors in our code in places where we know there are likely problems, that can make debugging much easier.

### Hey, adding isn't really a useful function. Let's get serious.
OK, you're ready for the first project. Continue on to the first chapter, where we'll manipulate html elements on a page. We’ll learn more about javascript syntax, data structures, and programming patterns to make a simple website: **a fanpage for pizza**!


# Chapter 1

## Make a simple game

Let's build a game, everybody. Let's have some fun.

Our game will be built from scratch.

We'll create a bunch of objects and functions. We'll put them together to make our game run, and experiment with changing the functions and the object attributes to alter the behavior of the game.

It'll be a single player game. A [roguelike](http://en.wikipedia.org/wiki/Roguelike) [rpg](http://en.wikipedia.org/wiki/Role-playing_video_game) with extremely simple graphics.

Usually roguelike games have procedurally generated levels, but we'll just build static levels for this example.

Our game will feature monsters, weapons, coins, potions, and a hero.

That small list above gives us a good sense of what objects and functions we'll need in our code.

We'll need to represent each of those things in our game code, so let's briefly outline the parts of the game we'll need to build, along with the typical actions each part will have:

### Game
- Loop
- Draw

### Level
- Load level data
- Draw

### Hero
- Update
- Draw
- Drink Potion
- Pick up Coin
- Fight Monster

### Monster
- Update
- Draw
- Fight Hero

### Weapon
- Update
- Draw

### Coin
- Update
- Draw

### Potions
- Update
- Draw

Each of the above headers will be an object in our game, and each of the list items will be methods or attributes of their respective headers.

Let's get started by creating a game object.

```
// Here we select the canvas with an id of game 
// this is where we will draw our game assets
var canvas = document.querySelector('#game');

// What kind of drawing will we do?
// our game is in 2d, so our drawing will happen in the _context_ of 2 dimensions
var context = canvas.getContext('2d');

function startGame(){ 
  // set the width and height of our drawing canvas
  canvas.height = 400;
  canvas.width = 800;

  // start the game loop
  loop();
}

// any thing inside the loop() function gets run on every loop
function loop(){
  // this function runs the loop at a consistent rate, 
  // and only runs the loop when the browser tab is in focus
  requestAnimationFrame( loop, canvas );

  // update the game
  update();

  // draw new stuff after they've been updated
  draw();
}

// make a box object
// give it a starting x, y location, a width, height, speed, and color
var box = {
  x: 50,
  y: 50,
  width: 10,
  height: 10,
  speed: 10,
  color: '#4f5654'
};

// this function manages all the user input for the box object
box.input = function(){
  
  // check if any of the arrow keys are in the keysDown object
  if (40 in keysDown) {
    box.y += box.speed;
  }
  if (38 in keysDown) {
    box.y -= box.speed;
  }
  if (37 in keysDown) {
    box.x -= box.speed;
  }
  if (39 in keysDown) {
    box.x += box.speed;
  }
  
  // check if box hits left edge
  if (box.x <= 0) {
    box.x = 0;
  }

  // check if box hits right edge
  if (box.x >= canvas.width - box.width) {
    box.x = canvas.width - box.width;
  }

  // check if box hits top edge
  if (box.y <= 0) {
    box.y = 0;
  }

  // check if box hits bottom edge
  if (box.y >= canvas.height - box.height) {
    box.y = canvas.height - box.height;
  }

}

// draw the box
box.draw = function() {
  // set the color of the box
  context.fillStyle = box.color;

  // actually draw the box to the canvas
  context.fillRect(box.x, box.y, box.width, box.height);
};

// update the game
function update(){
  // check for any input relevant to the box
  // every time the game is updated
  box.input();
}

// draw on the canvas
function draw(){
  // this clears the canvas so that when the box is drawn each time
  // it looks like it moves, rather than drawing a line that follows the path
  // of the box. comment out the context.clearRect line to see what i mean.
  context.clearRect(0, 0, canvas.width, canvas.height);
  box.draw();
}

// this object contains any keyboard keys that are currently pressed down
var keysDown = {};

// here we add an event listener that watches for when the user presses any keys
window.addEventListener("keydown", function(e) {
  // e stands for event

  // add the key being pressed to the keysDown object
  keysDown[e.keyCode] = true;

  // if the user is pressing any of the arrow keys, disable the default
  // behavior so the page doesn't move up and down
  if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 37 || e.keyCode === 39) {
    e.preventDefault();
  }
}, false);

// this event listener watches for when keys are released
window.addEventListener("keyup", function(e) {
  // and removes the key from the keysdown object
  delete keysDown[e.keyCode];
}, false);

// start the game
startGame();
```

> _This section of the book is still a work in progress. Make suggestions at [github.com/learn-js/learnjs/issues](http://github.com/learn-js/learnjs/issues).


# Appendix


## Javascript style guide & syntax cheatsheet


### Variables

#### Creating a variable:

```
var nameOfVariable;
```

> Variables are camelCase, meaning first letter is lowercase, and if the variable is made of multiple words, the first letter of following words are capitalized.

#### Creating a variable that references a string:

```
var thisIsAString = 'this is a string';
```

Surround strings with single quotes.


#### Creating a variable that references a number:

```
var thisIsANumber = 3.14;
```

Numbers do not have quotes around them.

#### Creating a variable that references an array:

```
var thisIsAnArray = [1, "two", [3, 4]];
```

Note that one of the values in the array is a number, one is a string, and another is an array. Arrays can hold any value in any order.

#### Accessing the values in an array:

```
thisIsAnArray[0];
```

The above will return the number `1`. Arrays use numbers as the index of their values, and with javascript an array's index always start at `0`, making `0` reference the first value of the array.

```
thisIsAnArray[1];
```

This returns the string 'two';

##### How would you return the number `4` from the nested array?

Like this:

```
thisIsAnArray[2][1];
```

#### Creating a variable that references an object:

var thisIsAnObject = {
  someString: 'some string value',
  someNumber: 1234,
  someFunction: function(){
    return 'a function that belongs to an object';
  }
}

Here we're setting `someString` to `'some string value'`, `someNumber' to `1234`, and we're creating a function named `someFunction` that returns the string `'a function that belongs to an object'`. So how do we access these values?

To get the value of `someString` using dot notation:

```
thisIsAnObject.someString;
```

Or using bracket notation:

```
thisIsAnObject['someString'];
```

To get the value of `someNumber` using dot notation:

```
thisIsAnObject.someNumber;
```

Or using bracket notation:

```
thisIsAnObject['someNumber'];
```

To use the function `someFunction` using dot notation:

```
thisIsAnObject.someFunction();
```

Or using bracket notation:

```
thisIsAnObject['someFunction']();
```

Using square bracket notations with functions looks a little wacky. It will be useful if you are storing function names in variables as strings, and need to use the variable to call the function being stored. Otherwise, stick with dot notation.
That goes for other attributes on an object, too: stick with dot notation unless there's a good reason to use bracket notation.

For instance, it's more clear to use bracket notation in a situation like this:

```
for (var key in object){
  thisIsAnObject[key];
}
```

This gives you an idea of how to iterate through an object using a for...in loop.


## Additional resources

### javascript books:
- [js for cats](https://github.com/maxogden/javascript-for-cats)
- [eloquent javascript](http://eloquentjavascript.net/)
- [learning javascript design patterns](http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [writing modular javascript](http://addyosmani.com/writing-modular-js/)
- [jquery fundamentals](http://jqfundamentals.com/)
- [javascript enlightenment](http://www.javascriptenlightenment.com/JavaScript_Enlightenment.pdf)

### node.js books:
- [art of node](https://github.com/maxogden/art-of-node)
- [stream handbook](https://github.com/substack/stream-handbook)
- [node beginner book](http://www.nodebeginner.org/)

### html/js/dom books:
- [dive into html5](http://diveintohtml5.info/)
- [dom enlightenmnet](http://domenlightenment.com/)

### Style guides:
- [idiomatic.js](https://github.com/rwldrn/idiomatic.js)
- [idiomatic html](https://github.com/necolas/idiomatic-html)
- [idiomatic css](https://github.com/necolas/idiomatic-css)
- [airbnb js style guide](https://github.com/airbnb/javascript)
- [felixge node style guide](https://github.com/felixge/node-style-guide)
- [jQuery's javascript style guide](http://contribute.jquery.org/style-guide/js/)



# Changelog

## v0.3.2
- Substantial copy editing
- Start chapter 1 about making an rpg game
- Rearrange and edit Basics intro section

## v0.3.1
- start intro to node section
- add contributors list
- add simple keyboard interaction example

## v0.3.0
- start Basics section
- add intro to Chrome Developer Tools
- add intro to functions

## v0.2.0:
- added introduction to grunt.js
- added introduction to git & GitHub
- small typo fixes

## v0.1.0:
- first release
- intro to functions - create an add function
- appendix with initial style guide and additional resources


# Contributors
These wonderful people have helped the book along by copy editing, reporting errors, providing advice, and more. Thank you!

Carrie Ramsdell - copy editing
Sam Sermeno - copy editing
[Matt Renquist](https://github.com/mattrenquist) - bug fixes, code updates
[Benjamin Zanatta](https://github.com/benjaminzanatta) - design recommendations
[Adam Duvander](https://twitter.com/adamd) - typo fixes, feedback on progress