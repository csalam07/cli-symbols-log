import test from 'ava';
import stripAnsi from 'strip-ansi';
import cliSymbolsLog from './index.js';

for (const [key, value] of Object.entries(cliSymbolsLog)) {
  console.log(value, key);
}

console.log('');

test('returns cli log symbols', (t) => {
  t.true(
    stripAnsi(cliSymbolsLog.success) === '✔' ||
      stripAnsi(cliSymbolsLog.success) === '√',
  );
});
