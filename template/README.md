![Moleculer logo](http://moleculer.services/images/banner.png)

# {{projectName}} [![NPM version](https://img.shields.io/npm/v/{{projectName}}.svg)](https://www.npmjs.com/package/{{projectName}})

{{projectDescription}}

## Features

## Install

```bash
$ npm install {{projectName}} --save
```
or
```bash
$ yarn add {{projectName}}
```

## Usage

```js
"use strict";

const { ServiceBroker } = require("moleculer");
const broker = new ServiceBroker();

// Load service
broker.createService(require("{{projectName}}"));

// Call
broker.call("{{serviceName}}.xyz", {}).then(console.log);
/* Result: ??? */

```

## Settings
| Property | Description |
| -------- | ----------- |

## Actions
| Name | Params | Result | Description |
| ---- | ------ | ------ | ----------- |

# Test
```
$ npm test
```

In development with watching

```
$ npm run ci
```

# License
The project is available under the [MIT license](https://tldrlegal.com/license/mit-license).

# Contact
Copyright (c) 2016-{{year}} Ice Services

[![@ice-services](https://img.shields.io/badge/github-ice--services-green.svg)](https://github.com/ice-services) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)
