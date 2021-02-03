const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
  var worker_process = child_process.fork("support.js", [i]);

  worker_process.on('close', function (code) {
   console.log('child process exited with code ' + code);
  });

  worker_process.on('message', (msg) => {
    console.log('Message from child', msg);
  });

  worker_process.send('world');
}