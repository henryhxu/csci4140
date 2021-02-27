function dom(){
  var a = document.getElementById("append");
  a.addEventListener("click", function(evt) {
      append();
  });

  var a = document.getElementById("insertBefore");
  a.addEventListener("click", function(evt) {
      insertBefore();
  });

  var a = document.getElementById("remove");
  a.addEventListener("click", function(evt) {
      remove();
  });
  var a = document.getElementById("print");
  a.addEventListener("click", function(evt) {
    printChildNodes();
  });
}

dom();

var id = 0;

function append(){
  id++;
  var p = document.createElement("p");
  p.id = id;
  console.log("the new element's id is " + p.id);
  var node = document.createTextNode(id+" - This is appended.");
  p.appendChild(node);
  var a = document.getElementById("container");
  a.appendChild(p);
}

function insertBefore(){
  id++;
  var p = document.createElement("p");
  p.id = id;
  p.innerText = id + " - This is inserted.";
  var a = document.getElementById("container");
  var b = document.getElementById("main");
  a.insertBefore(p, b);
}

function remove(){
    var p = document.getElementById("container");
    var i = 0;
    while(p.children.length != 1){
      if (p.children[i].id == "main") {
        i = i + 1;
      }
      p.removeChild(p.children[i]);
    }
  }
  function printChildNodes(){
    var p = document.getElementById("container");
    var children = p.childNodes;
    for (var i = 0; i < children.length; i++) {
      console.log("The current node's type is " + children[i].nodeType);
      console.log("Node Text Content is " + children[i].textContent)
    }
  }