# Object to Map converter

## Description

A simple converter that deep converts your JavaScript Object into Map. That means that if any 
property anywhere in your object is also an object, it will be also converted into map.

Reasons why using Map is better than using Objects can be found in [this Medium post](https://medium.com/better-programming/stop-using-objects-as-hash-maps-in-javascript-9a272e85f6a8). 

## Usage

```js
const convertToMap = require("convert-to-map");
const val = {...}
const asMap = convertToMap(val);
```

### Note:
If you pass non-object value, function throws an error.