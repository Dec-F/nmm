// eslint-disable-next-line
const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser();
parser.addArgument(['-n', '--node_version'], {
  help: 'Your source node version',
});

module.exports = parser;
