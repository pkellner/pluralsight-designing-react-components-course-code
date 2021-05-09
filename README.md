# pluralsight-designing-react-components
The master branch here is the latest updates to the Pluralsight course published by Peter Kellner in May of 2020 in the master branch.

# Course Code for [Designing React Components](https://app.pluralsight.com/library/courses/react-components-designing) on Pluralsight



<hr/>

![Package NextJS Update Required 9.5.5 and Tailwindcss patch](ImportantNotice.png)

### December 26, 2020 : 

This repository is current with the released course on Pluralsight.  All `package.json` files reference NextJS 9.5.5 and also 
include the special compatability patch for tailwindcss.  Module 3, clip 3, "Setting up Tailwind and adding..." is currently being updated to reflect
this change. The change that will be included simply changes the devDependencies section of `package.json`.   `tailwindcss: "1.2.0"1` becomes `"tailwindcss": "npm:@tailwindcss/postcss7-compat@^2.0.2"`
You can read more details about this on the tailwindcss site here.  https://tailwindcss.com/docs/guides/nextjs. 

Again, <b>all the code in this repository has been updated</b> to reflect this latest change.

<hr/>

<br/>
This GitHub repo includes the final code for all the modules in the course 

## Course Description

Creating UIs in React is all about creating independent components that seamlessly work together to present a consistent view across your web app. In this course, Designing React Components, you will gain the ability to architect and build high quality web apps, that ensures just the right components re-render as the data in your applications changes. First, you will learn how separation of concerns applies to building React components. Next, you will discover how Higher Order Components (HOCs) and Render Props have led the way in achieving code separation. Finally, you will explore how to use Context for establishing shared information, and use custom hooks for advanced state management. When you are finished with this course, you will have the skills and knowledge of React component design needed to leverage re-usability and ensure consistency in your apps and code with less bugs.

## Getting Started
1. **Install [Node 12.16.3 with NPM 6.14.4](https://nodejs.org)**. 
2. **Clone this repository.** - `https://github.com/pkellner/pluralsight-designing-react-components-course-code` or [download the zip](https://github.com/pkellner/pluralsight-designing-react-components-course-code/archive/master.zip)
3. **Set your default directory to which module you want (example: `cd 02-designing-better-components` - `cd clip-030-components-to-code`
4. **Install Node Packages with Dependencies.** - `npm install`


## Directory Structure Here

Each of the 5 folders here represent one module of the course.  In each folder, there are subfolders that represent the completed code at the end of each clip. Where this is no clip reference, either there is no code in that clip or nothing changed from the previous clip.

Once in a clip directory, the easiest way to test the app is to first install the packages by typing at the root of that directory (in a terminal window or DOS prompt)

`npm install`

Then, do run the app you just need type

`npm run dev`

And that will launch the web server on port 3000 where you can browser to it at the url: `http://localhost:3000`

Starting in module 4, clip 4,  you'll need to launch the `json-server` to simulate a REST server.  To do that, you enter the command at a terminal or DOS prompt:

`npm run json-server`

## Background

This course uses the Next.js framework as a demonstraton vehicle for React Hooks. If you want to know more about Next.js you should watch my other course on Pluralsight titled "Building Server-side Rendered React Apps for Beginners". You can find it [here](https://www.pluralsight.com/courses/building-server-side-rendered-react-apps-beginners). 

## Repo or Course Issues

If you find any problems or issues, feel free to post it as an issue here at this forum and I will look into it as soon as I can. You can also contact me directly at http://peterkellner.net/contact/ 

I hope you enjoy the course!











