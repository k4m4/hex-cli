import test from 'ava'
import execa from 'execa'

test('hex encoding', async t => {
	const {stdout} = await execa('./cli.js', ['foobar'])
	t.is(stdout, (`✔ ` + new Buffer.from('foobar').toString('hex')))
})

test('hex decoding', async t => {
	const {stdout} = await execa('./cli.js', ['-d', '756e69636f726e'])
	t.is(stdout, (`✔ ` + new Buffer.from('756e69636f726e', 'hex').toString('utf8')))
})