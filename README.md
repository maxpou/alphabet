# Alphabet

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Purpose

Create words based on a language statistics.

The word generated will follow the set statistics:
* if there is 20% chances to get a 'a' after a 'b', then there is 20% chances to get a 'a' after a 'b'
* if there is 20% words with a length of 8, then there is 20% chances to generate a 8 letter word


## How to use it

```bash
node main.js
```

```bash
# Options:
~/alphabet » node main.js --help

  Usage: main [options]

  Options:

    -f, --file [fileName]    Define the dataset [fr]
    -q, --quantity [number]  Words to create [5]
    -h, --help               output usage information
```


## Example of generated words

*sitoretio*, *divar*, *dondi*, *andent*, *cuitex*, *ancilile*, *atlansezite*, *detindele*, *ancerein*


## Todo

- [x] Pass the file as argument
- [x] Get more that 1 word (arguments)
- [ ] Handle some random errors
- [ ] Get more realistic words!!!
- [ ] Document code
- [ ] Unit test with Jest
