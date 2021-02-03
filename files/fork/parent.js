var child_process = require('child_process');

var child = child_process.fork('./child.js');

child.on('message', (m) => {
    console.log('message from child:', m);
});

child.send({from: 'parent'});