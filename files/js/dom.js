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
}

dom();

var id = 0;

function append(){
  id++;
  var p = document.createElement("p");
  var node = document.createTextNode(id+" - This is appended.");
  p.appendChild(node);
  var a = document.getElementById("container");
  a.appendChild(p);
}

function insertBefore(){
  id++;
  var p = document.createElement("p");
  p.innerText = id + " - This is inserted.";
  var a = document.getElementById("container");
  var b = document.getElementById("main_title");
  a.insertBefore(p, b);
}

function remove(){
    var p = document.getElementById("container");
    var children = p.childNodes;
    for (var i = 0; i < children.length; i++) {
      if (children[i].id != "main_title") {
        p.removeChild(children[i]);
      }
    }
  }