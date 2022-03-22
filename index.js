import chalk from 'chalk';
import isCliUnicode from 'is-unicode-cli';

const main = {
  success: chalk.green('✔'),
  warning: chalk.yellow('⚠'),
  info: chalk.blue('ℹ'),
  error: chalk.red('✖'),
};

const fallback = {
  success: chalk.green('√'),
  warning: chalk.yellow('‼'),
  info: chalk.blue('i'),
  error: chalk.red('×'),
};

const cliSymbolsLog = isCliUnicode() ? main : fallback;

export default cliSymbolsLog;
