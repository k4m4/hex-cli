#!/usr/bin/env node
'use strict';
const meow       = require('meow');
const getStdin   = require('get-stdin');
const logSymbols = require('log-symbols');

const cli = meow(`
	Usage
	  ~ ❯❯❯ hex [string]
	  ~ ❯❯❯ echo [string] | hex
	Options
		-d, --decode  Decode hex encoded string
	Examples
	  ~ ❯❯❯ hex foobar
	  ${logSymbols.success} 666f6f626172
	  ~ ❯❯❯ hex -d 756e69636f726e
	  ${logSymbols.success} unicorn
`, {
	flags: {
		decode: {
			type: 'boolean',
			alias: 'd',
			default: false
		}
	}
});

const input = cli.input[0];

function HexEncode (text) {
	return new Buffer.from(text).toString('hex');
}

function HexEncodedRegex (ciphertext) {
  const re = '(?:[0-9a-fA-F])+'
	if ((ciphertext ? new RegExp('(?:^' + re + '$)') : new RegExp(re, 'g')).test(ciphertext)) return true;
	else return false
}

function HexDecode (text) {
  if (HexEncodedRegex(text)) return new Buffer(text, 'hex').toString('utf8');
  else return 'Ciphertext doesn\'t seem to be hex-encoded'
}

function display (plaintext) {
	if (plaintext != 'Ciphertext doesn\'t seem to be hex-encoded') {
		console.log(`${logSymbols.success} ` + plaintext)
	} else {
		console.log(`${logSymbols.error} Ciphertext doesn\'t seem to be hex-encoded`);
		process.exit(1);
	}
}

if (!input && process.stdin.isTTY) {
	console.log('Enter string to hex encode/decode');
	process.exit(1);
}
if (input) {
	if (cli.flags["decode"]) {
		display(HexDecode(input.trim()));
	} else {
		display(HexEncode(input.trim()));
	}
} else {
	getStdin().then(stdin => {
		if (cli.flags["decode"]) {
			display(HexDecode(stdin.trim()));
		} else {
			display(HexEncode(stdin.trim()));
		}
	})
}