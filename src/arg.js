const ArgumentParser = require('argparse').ArgumentParser;

const parser = new ArgumentParser()
parser.addArgument(
    ['-n', '--node_version'],
    {
        help: 'Your source node version'
    }
)


module.exports = parser