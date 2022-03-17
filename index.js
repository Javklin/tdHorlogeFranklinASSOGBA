function refresh() {
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout("showDate()", t);
}

function showDate() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  var time = h + ":" + m + ":" + s;
  document.getElementById("horloge").innerHTML = time;
  refresh();
}

var original = document.getElementById("duplicater");
var i = 0;
document.getElementById("addAlarme").addEventListener("click", function () {
  console.log("add");
  var clone = original.cloneNode(true);

  clone.id = "duplicater" + ++i;

  original.parentNode.appendChild(clone);
});

btns = document.getElementsByClassName("supAlarme");
for (var y = 0; y < btns.length; y++) {
  btns[y].addEventListener("click", function () {
    console.log("sup");
    // parent = elements.parentNode;
    //elements.innerHTML = "";
  });
}
