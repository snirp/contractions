# Contractions

Converts apostrophe and slang contractions to their standard lexicon form. Built-in support for English language only.

```js
decontract("Btw, I've gotta run, we're late. Thx.")
// by the way, I have got to run, we are late. thanks.
```

Note that capitalization is not preserved. This is usually not a requirement in for purposes of Natural Language Processing.

# Installation

This library can be used in all JavaScript runtime environments (browser and NodeJS)

```bash
# NPM
npm i -s @snirp/contractions
# Yarn
yarn add @snirp/contractions
# PNPM
pnpm add @snirp/contractions
```

 # Usage

 ```js
import decontract from '@snirp/contractions';

// Default options uses the built-in contractions and slang maps
decontract("It's abt time.")
// It is about time.

// Configure the contractions or slang to be disabled, and use custom map
const lolcatMap = {
  hello: "y halo thar",
  cheeseburger: "cheezburger"
};

decontract('Hello cheeseburger!', {
  convertContractions: false,
  convertSlang: false,
  customMap: lolcatMap
});
// y halo thar cheezburger!
```

# Arguments and options
The function takes a string to be decontracted an (optional) options object, with the following properties:

|property|description|default|type|
|:---|---|---|---|
|`convertContractions`|Use the built-in map to convert contractions|`true`|boolean|
|`convertSlang`|Use the built-in map to convert slang words|`true`|boolean|
|`customMap`|Provide a custom map to be appended to the selected built-in maps|`{}`|Record<string,string>|