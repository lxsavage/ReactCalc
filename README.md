# ReactCalc v0.1.0

This app is an example of using Electron and React.js to create a basic calculator.

### Features

* Basic 4 operators/operations `+ - * /`
* A backspace button `<`
* History Function (Press `^` to go to previous calculation)
   * `C` To clear this entry
   * `!` To clear history

### Running

#### Download
Pre-compiled versions of the app are available (here)[https://github.com/r2d2292/ReactCalc/releases], on the releases page.

#### Build
(Currently only tested on MacOS Mojave 10.14.3):
1. Run `yarn run electron-build`
2. Output is in `./dist/mac/calc-app.app` or DMG in `./dist/calc-app-*.*.*.dmg`

#### Dev
Run 2 tabs of Terminal

1. Run `yarn start`
2. After #1's compiling is complete:
   * run `electron .`
