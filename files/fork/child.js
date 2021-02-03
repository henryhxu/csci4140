process.on('message', function(m){
    console.log('message from parent: ' + JSON.stringify(m));
    process.exit();
});

process.send({from: 'child'});
