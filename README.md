**_ This is a work in progress, do not use this in production _**

# react-native-pathjs-charts-expo

[![npm version](https://badge.fury.io/js/react-native-pathjs-charts-expo.svg)](https://badge.fury.io/js/react-native-pathjs-charts-expo)

This library is a cross-platform (iOS/Android) library of charts/graphs originally using [react-native-svg](https://github.com/magicismight/react-native-svg) and [paths-js](https://github.com/andreaferretti/paths-js) but ported to use [expo](https://github.com/expo/expo) for the svg part.

This project is based on the now archived at version 0.0.34 [react-native-pathjs-charts](https://github.com/capitalone/react-native-pathjs-charts)

Components include Bar charts, Smoothline charts, Stockline charts, Scatterplots, Tree graphs and Radar graphs. Since Paths-Js makes no assumptions about rendering, this library is perfect for using SVG path objects to render custom charts easily.

This library is in its early stages, but I welcome contributors who would like to help make this the charting solution for React Native.

![](https://github.com/capitalone/react-native-pathjs-charts/wiki/images/chart-screenshots.png)

## Installation

To add the library to your React Native project:

```
npm install react-native-pathjs-charts-expo --save
```

## Current Features

- Bar, Smoothline, Stockline, Scatterplot, Tree and Radar graphs
- Configuration of format, labels, colors, axis, ticks, lines
- No touch support
- No animations
- Chart information configurable based on data parameters which specify which variables are accessors
- Rendering works on iOS/Android
- No native dependencies for linking

## Example Application

To run the example application (from a cloned repo):

```
cd example
npm install
react-native run-ios
# or
react-native run-android
```

### Developing and Testing With The Example App

As you are working on changing src files in this library and testing those changes against the example app, it is necessary to copy files to example/node_modules/react-native-pathjs-charts each time a change is made. To automate this, a `sync-rnpc` script has been added that will create a background process to watch for src file changes and automatically copy them. To enable this:

```
cd example
npm run sync-rnpc
```

## Todo

For this library to really shine, there are a lot of improvements to be made. Here are some of ideas:

- Add basic animations to draw the charts
- Add touch functionality
- Add the ability to absolutely position regular React-Native views in relation to SVG chart elements
- More chart types
- More axis controls (to control scale)
- Add View component support to allow custom components instead of message when no data appears
- Events
- More documentation, information on configuration
- Extended examples
- Bug fixing, unit testing, cleanup
- CICD pipeline with confirmed build success
