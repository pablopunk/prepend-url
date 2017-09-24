# prepend-url

[![build status](https://img.shields.io/travis/pablopunk/prepend-url.svg)](https://travis-ci.org/pablopunk/prepend-url)
[![code coverage](https://img.shields.io/codecov/c/github/pablopunk/prepend-url.svg)](https://codecov.io/gh/pablopunk/prepend-url)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/pablopunk/prepend-url.svg)](<>)

> Prepend an url to another url


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Author](#author)
* [Contributors](#contributors)
* [License](#license)


## Install

```sh
npm install prepend-url
```


## Usage

```js
const prependUrl = require('prepend-url');
console.log(
  prependUrl(
    'http://pablopunk.com',
    'https://microsec.pw'
  )
);
//=> https://microsec.pw/pablopunk.com/
```


## Author

| ![me](https://www.gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?s=100) |
| ----------------------------------------------------------------------------- |
| © 2017 [Pablo Varela](http://pablo.life)                                      |


## Contributors

| Name             | Website              |
| ---------------- | -------------------- |
| **Pablo Varela** | <https://pablo.life> |


## License

[MIT](LICENSE) © [Pablo Varela](https://pablo.life)
