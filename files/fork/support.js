function longComputation(j) {
  for (var i=0; i<1000; i++) {
    ;
  }
  return i;
}

process.on('message', (msg) => {
    const result = longComputation(process.argv[2]);
    // const result = 111;
    process.send(result);
    console.log("Child Process " + process.argv[2] + " executed." );
  });