# Cology

<div align="center">
    <img src="https://user-images.githubusercontent.com/62370527/155471574-7a68ddc5-3165-47a8-82c8-b902e2544bde.png" alt="logo" width="80%" height="80%">
</div>

---

[![npm](https://img.shields.io/badge/-Npm-CB3837.svg?logo=npm&style=popout)](https://www.npmjs.com/package/cology) ![node.js](https://img.shields.io/badge/-Node.js-333333.svg?logo=node.js&style=popout) [![build](https://github.com/airRnot1106/cology/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/airRnot1106/cology/actions/workflows/node.js.yml) ![npm](https://img.shields.io/npm/dt/cology) [![GitHub issues](https://img.shields.io/github/issues/airRnot1106/cology)](https://github.com/airRnot1106/cology/issues) [![GitHub stars](https://img.shields.io/github/stars/airRnot1106/cology)](https://github.com/airRnot1106/cology/stargazers) [![GitHub license](https://img.shields.io/github/license/airRnot1106/cology)](https://github.com/airRnot1106/cology/blob/main/LICENSE)

## Highlights

- Bring order to your console log.

- Very simple API

- Supports TypeScript

## Install

```console
$ npm install cology
```

## Usage

```js
const { Cology } = require('cology');
/*TS
import { Cology } from 'cology'
*/

Cology.log('info', 'Info Message');
//> Info Message

Cology.log('error', 'Error Message');
//[ERROR] Error Message

Cology.setBorder('--------');
Cology.log('warn', 'Title:\nWarn Message');
/*
--------
[WARN] Title:
[WARN] Warn Message
--------
	
*/
```

## API

It's easy to use Cology APIs to log.

#### Cology.log`(level, message)`

Example: `Cology.log('debug', 'Debug Message')`<br>

Output a message to the console. The decoration changes depending on the level you specify.<br>

There are the following types of levels.<br>

| level     | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| 'debug'   | No particular decoration                                                  |
| 'info'    | It will be prefixed with ">"                                              |
| 'success' | Same as info, but it will be green                                        |
| 'warn'    | It will be prefixed with "[WARN]" and the color will turn yellow          |
| 'error'   | It will be prefixed with "[ERROR]" and the color will turn red            |
| 'fatal'   | It will be prefixed with "[FATAL_ERROR]" and the color will turn bold red |

#### Cology.date()

Example: `Cology.date()`

Displays the time in the format [YYYY-MM-DDTHH:mm:ss].

#### Cology.setBorder`(border)`

Example: `Cology.setBorder('--------')`

Enclose messages in a specified border when logging. The default value is ''. If '', no new line is created.

#### Cology.push() & Cology.pop()

Example:

```js
Cology.push();

Cology.setBorder('<><><><>');
Cology.log('info', 'Info Message');

Cology.pop();
```

These two methods are used as a set.<br>

The border between push and pop will be temporary. Temporary boarder does not work on the outside.<br>

A border set anywhere other than between push and pop will function as a global border throughout the code.

## Author

- Github: [airRnot1106](https://github.com/airRnot1106)

- NPM: [airrnot1106](https://www.npmjs.com/~airrnot1106)

- Twitter: [@airRnot1106](https://twitter.com/airRnot1106)

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](https://github.com/airRnot1106/cology/blob/main/LICENSE) file for details.
