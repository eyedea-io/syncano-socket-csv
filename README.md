# Syncano Socket for CSV generation

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-csv/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-csv/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-csv/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-csv/)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/csv.svg)](https://www.npmjs.com/package/@eyedea-sockets/csv)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-csv.svg)

Main Socket features:

* **csv/dump** — dump data from given class in CSV format

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/csv --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

// Search for a user
const params = {
  className: 'books'
}
const csvBooks = await s.get('csv/dump', params)

```
