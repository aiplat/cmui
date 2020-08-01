const path = require('path');
global.buildDir = path.join(__dirname, 'less');
global.staticDir = path.join(__dirname, 'lib');
require('./build/npmCss')();