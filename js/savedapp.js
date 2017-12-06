 /*  $(document).ready(function() {

    $(".button-collapse").sideNav();

  });

  */


if (ON_INDEX) {

  checkLocalStorage();

}  else {

     var monsterName = document.querySelector(".card-title").textContent;

     if (monsterName === MONSTERNAME) {

      let btns = document.getElementsByClassName("monsters");

      for (j=0; j<2; j++) {

      btns[j].addEventListener("click", function() {

          var monsterFavorites = checkLocalStorage();
          removeLocalStorage();
          var listOfMonsters = monsterFavorites;
          storeArray(listOfMonsters);

       });
      }
     }
}

function checkLocalStorage() {
  if(!localStorage.getItem('monsterInfo')) {
    if (!ON_INDEX) {
     populateStorage();
     }
} else {
    var monsterFavs = [];
    monsterFavs = checkMonsterFaves();

}
return monsterFavs;
}

function populateStorage() {

var monsterArray = [];

monsterArray = document.getElementsByClassName('card-title');

var myObj = {};
var monsterList = [];

 for (i=0; i < monsterArray.length; i++) {
    myObj.name = document.querySelector("title").textContent;
    myObj.fave = false;
    monsterList.push(myObj);
  }
 storeArray(monsterList);

}

function storeArray(array) {

localStorage.setItem("monsterInfo", JSON.stringify(array));

}

function checkMonsterFaves() {

monsterFaves = JSON.parse(localStorage.getItem('monsterInfo'));

for (var i=0; i< monsterFaves.length; i++) {

  if (monsterFaves[i].fave && ON_INDEX) {
    favIconIndex(monsterFaves[i]);
  }

  if (!ON_INDEX) {

    monsterFaves[i].fave = favesMonsterPages(monsterFaves[i].fave);

  }
}
return monsterFaves;
}

function favesMonsterPages(fave)  {

    let hidden = document.querySelector(".hide");
    hidden.classList.toggle("hide");
    hidden.classList.toggle("unhide");
    let visible = document.querySelector(".unhide");
    visible.classList.toggle("unhide");
    visible.classList.toggle("hide");

    if (fave) {
        fave = false;
    } else {
        fave = true;
    }
    return fave;
  }

function favIconIndex(Obj) {

 if (document.querySelector("title")  === Obj.name) {

   let hidden = document.querySelector(".hide");
   hidden.classList.toggle("hide");

 }

}
function removeLocalStorage() {
   localStorage.removeItem("monsterInfo");
}
