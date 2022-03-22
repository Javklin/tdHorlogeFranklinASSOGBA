var checkForm = 0;
function refresh() {
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout("showDate()", t);
}
var audio1 = new Audio("alarme/son1.mp3");
var audio2 = new Audio("alarme/son2.mp3");
var nbForm = 1;
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
  checkAlarmSelected();
  stopAlarmSelected();
  console.log(nbForm);
  if (nbForm == 0) {
    checkForm++;
  }
  console.log(checkForm);
  refresh();
}

var i = 0;

function addForm() {
  // si il a 0 form deb
  if (nbForm == 0 || checkForm > 0) {
    console.log("addAlt");
    var original = document.getElementById("duplicaterClone");
    nbForm++;
    var clone = original.cloneNode(true);
    clone.style.display = "block";

    clone.id = "duplicater" + ++i;

    document.getElementById("altSup").parentNode.appendChild(clone);
  } // si il a 0 form fin
  else if (checkForm == 0) {
    console.log("add");
    var original = document.getElementById("duplicater");
    nbForm++;
    var clone = original.cloneNode(true);

    clone.id = "duplicater" + ++i;

    original.parentNode.appendChild(clone);
  }
}
document.getElementById("addAlarme").addEventListener("click", function () {
  addForm();
});

function checkAlarmSelected() {
  var dateActu = new Date();
  for (var w = 0; w < nbForm; w++) {
    var formActu = document.forms[w];
    var heurForm = formActu.elements["hour"].value;
    var minForm = formActu.elements["min"].value;
    var optionForm = formActu.elements["zone"].value;
    if (formActu.elements["cbSon"].checked) {
      // si on coche une alarme
      console.log(dateActu.getHours());
      console.log(dateActu.getMinutes() + "fo " + minForm);
      console.log(dateActu.getHours() + "fo " + heurForm);
      console.log(optionForm);
      if (heurForm == dateActu.getHours() && minForm == dateActu.getMinutes()) {
        if (optionForm == "son 1") {
          audio1.loop = false;
          audio1.play();
        }
        if (optionForm == "son 2") {
          audio2.loop = false;
          audio2.play();
        }
        // console.log("yes");
      }

      console.log("checker");
    }
    console.log(heurForm);
  }
}

function stopAlarmSelected() {
  var dateActu = new Date();
  for (var w = 0; w < nbForm; w++) {
    var formActu = document.forms[w];
    var heurForm = formActu.elements["hour"].value;
    var minForm = formActu.elements["min"].value;
    var optionForm = formActu.elements["zone"].value;
    var aucuneAlarme = true;
    if (!formActu.elements["cbSon"].checked) {
      // si on coche une alarme
      console.log(dateActu.getHours());
      console.log(dateActu.getMinutes() + "fo " + minForm);
      console.log(dateActu.getHours() + "fo " + heurForm);
      console.log(optionForm);

      // audio1.pause();
      //audio2.pause();
    } else if (formActu.elements["cbSon"].checked) {
      aucuneAlarme = false;
    }
  }
  if (aucuneAlarme == true) {
    if (optionForm == "son 1") {
      audio1.pause();
    }
    if (optionForm == "son 2") {
      audio2.pause();
    }
  }
}

function removeForm() {
  nbForm--;
}
