/*  $(document).ready(function() {

    $(".button-collapse").sideNav();

  });

  */


var monsterFave = localStorage.getItem("monster");
monsterFave = stringToBoolean(monsterFave);


if (ON_INDEX) {
  localStorage.removeItem("firstTime");
  localStorage.setItem('firstTime', true);

  if (monsterFave) {
    let hidden = document.querySelector(".hide");
    hidden.classList.toggle("hide");

  }
}

if (!ON_INDEX) {

  var monsterList = [];

  for (var i = 0; i < monsterList.length; i++) {

      var monsterList = [];



      var monsterFave = [];

      monsterFave[i] = localStorage.getItem("monster");
      monsterFave[i] = stringToBoolean(monsterFave[i]);


  var firstTime = localStorage.getItem("firstTime");
  firstTime = stringToBoolean(firstTime);


  if (firstTime) {

    localStorage.setItem('firstTime', false);
    firstTime = false;

    if (monsterFave) {

      let hidden = document.querySelector(".hide");
      hidden.classList.toggle("hide");
      hidden.classList.toggle("unhide");
      let visible = document.querySelector(".unhide");
      visible.classList.toggle("unhide");
      visible.classList.toggle("hide");

    }

  }

}

var monsterList = document.getElementsByClassName('monsters');



  monsterList[i].addEventListener("click", function() {

    if (monsterFave) {
      monsterFaveToUnfav();
    } else {
      monsterUnfavToFave();
    }

  });

}


function stringToBoolean(myString) {

  var myBoolean = false;

  switch (myString) {
    case "true":
      myBoolean = true;
      break;
    case "false":
      myBoolean = false;
      break;
    default:
      myBoolean = false;
      break;
  }

  return myBoolean;
}

function monsterFaveToUnfav() {
  localStorage.setItem('monster', false);
  monsterFave = false;
  let hidden = document.querySelector(".hide");
  hidden.classList.toggle("hide");
  hidden.classList.toggle("unhide");
  let visible = document.querySelector(".unhide");
  visible.classList.toggle("unhide");
  visible.classList.toggle("hide");

}

function monsterUnfavToFave() {
  localStorage.setItem('monster', true);
  monsterFave = true;
  let hidden = document.querySelector(".hide");
  hidden.classList.toggle("hide");
  hidden.classList.toggle("unhide");
  let visible = document.querySelector(".unhide");
  visible.classList.toggle("unhide");
  visible.classList.toggle("hide");

}
