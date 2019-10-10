<p align="center">
    <a href="https://http://www.android.com">
        <img src="https://img.shields.io/badge/Created for-Node.js-teal.svg?style=flat">
    </a>
    <a href="https://http://www.android.com">
        <img src="https://img.shields.io/badge/Written in-TypeScript-purple.svg?style=flat">
    </a>
    <a href="https://tldrlegal.com/license/apache-license-2.0-(apache-2.0)">
        <img src="https://img.shields.io/badge/License-Apache 2.0-blue.svg?style=flat">
    </a>
</p>

## At a Glance

`DeepQuery.js` solves the problem of null element inside of long object chain.

## How to Get Started

Type in Terminal:

`npm install --save @imatyushkin/deep-query`

or, if you prefer `yarn` over `npm`, type:

`yarn add @imatyushkin/deep-query`

## Usage

### Simple Query

Let's assume we have some JavaScript object with complicated structure of nested objects:

```javascript
var obj = {
    a: {
        b: [
            { val: [1,2,3] },
            { val: [4,5,6] },
            { val: null },
        ]
    }
};
```

Now, we want to obtain a value located very deep in the tree:

```javascript
var regularQuery = obj.a.b[2].val[0] // CRASH 😡
```

We'll get crash because the `val` is `null`, which might be an unexpected case. To avoid this, we could implement a more complicated logic based on data structure:

```javascript
var safeQuery = (() => {
    var intermediateResult = obj.a.b[2];
    return intermediateResult.val ? intermediateResult.val[0] : null;
})();
```

With `DeepQuery.js` it works significantly easier:

```javascript
import "@imatyushkin/deep-query"

var query = obj.__("a.b.2.0") // No crash, just null will be returned 🙂
var anotherQuery = obj.__("a.b.1.0") // 4
```

### Filter

Here's example of query with data filter:

```javascript
var data = {
    users: [
        {
            name: "John",
            points: [10,9,5]
        },
        {
            name: "Donald",
            points: [8, 4, 2]
        }
    ]
}

var pointsOfJohn = data.__("users.name:John.0.points") // [10, 9, 5]
```

### Multiline Query

For convenience, you may use a multiline expression:

```javascript
// Instead of
var pointsOfJohn = data.__("users.name:John.0.points")

// use
var pointsOfJohn = data.__(`
    users
    .name:John.0
    .points
`)
```

## License

`DeepQuery.js` is available under the Apache 2.0 license. See the [LICENSE](./LICENSE) file for more info.
