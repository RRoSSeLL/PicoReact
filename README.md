# PicoReact


Pico implementation of a react development environment based on Webpack and Babel, it includes all that is necessary for learning or just testing a quick concept.

## Why
Tools like create-react-app are recommended in a lot of react tutorials, but the truth is that for learning or just quick test, it is a total overkill, including a lot of libraries and elements that will never be used, increasing the time for download, space on disk and build time. 

Having a minimal setup that allows to see how every thing fits together helps better understand what is happening and how to configure your own environment and debug errors.

## Clone, Install and Ready
Just clone this repository and run npm install inside the created folder and you're set.

## NPM Commands

- **dev**: Start development server and open your application in the default browser, where you can see in real time changes you make in the application.
- **build**: Creates a production build of your application in the "dist" folder.
- **devbuild**: Creates a development build with source maps, in case you want to inspect your app outside the dev server without production optimizations.