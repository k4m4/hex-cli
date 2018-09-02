# hex-cli [![Build Status](https://travis-ci.org/k4m4/hex-cli.svg?branch=master)](https://travis-ci.org/k4m4/hex-cli)

> Hex encode & decode a string, right from your terminal.

---

## Install

```
~ ❯❯❯ npm install -g hex-cli
```


## Usage

```
  Hex encode & decode a string, right from your terminal.

  Usage
    ~ ❯❯❯ hex [string]
    ~ ❯❯❯ echo [string] | hex
  Options
        -d, --decode  Decode hex encoded string
        -p, --plain   Display output without log symbols
  Examples
    ~ ❯❯❯ hex foobar
    ✔ 666f6f626172
    ~ ❯❯❯ hex -d 756e69636f726e
    ✔ unicorn
```


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)