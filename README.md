<br/>
<img alt="npm" src="https://img.shields.io/npm/dt/saudi-id-validator">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/saudi-id-validator?label=package%20size">
<br/>

# saudi-id-validator
A tiny package that helps you validate Saudi national or iqama ids


## Features
:white_check_mark: Supports Typescript
:white_check_mark: Accepts number or string
:white_check_mark: Accepts both eastern and western Arabic numbers 


## Installation
To install the package run:
```bash
npm i saudi-id-validator
```
or
```bash
yarn add saudi-id-validator
```

## Usage
Here's a basic example on how you can use the package:

```js
import { isValidSaudiID } from "saudi-id-validator"

console.log(isValidSaudiID("1000000008")) // => true if this's your id please don't sue me :)
console.log(isValidSaudiID(1000000008)) // => true
console.log(isValidSaudiID("١٠٠٠٠٠٠٠٠٨")) // => true
console.log(isValidSaudiID("1000000000")) // => false
console.log(isValidSaudiID("100000000")) // => false
console.log(isValidSaudiID("not a number")) // => false
```
