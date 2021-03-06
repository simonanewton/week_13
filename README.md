# Unit 13 Node Express Handlebars

## Description

This application presents users with a webpage that allows them to input a name of a burger, devour the burger, then put it in the trash. Upon submitting the burger name, the burger is placed on a Waiting List and stored in a MySQL database. When the user clicks the 'Devour it!' button, the burger is moved from the Waiting List to the Eaten Burgers section after having been modified within the database. Finally, when the user clicks the 'Trash' button, the burger is removed from the Eaten Burgers section and removed from the database.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

To install the required npm packages to run this application, run the following command:
```sh
npm install
```

Then, to create a local instance of the required database on your machine, run the following command:
```sh
npm run seed
```

## Usage

To use this application, run the following command:
```sh
npm start
```

## Credits

* https://www.npmjs.com/package/express
* https://www.npmjs.com/package/express-handlebars
* https://www.npmjs.com/package/mysql

## License

![license](https://img.shields.io/badge/license-MIT-green)

MIT License

Copyright (c) [2020] [Simon Newton]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.