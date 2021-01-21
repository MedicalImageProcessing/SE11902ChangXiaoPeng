var mkdirp = require('mkdirp');

mkdirp('/tmp/foo/bar/baz').then(made =>
    console.log(`made directories, starting with ${made}`))