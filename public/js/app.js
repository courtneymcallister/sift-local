var totalBoxes = 500;

for(var p = 0; p < 500; p++){
  var new_col_div = document.createElement("div");
  new_col_div.className = "col-xs-1";
  document.body.appendChild(new_col_div);
  new_col_div.id = `${p}` //tag each box with the id row,column
}

var temporaryList = [];
for (var i = 0; i < 500; i++){
  temporaryList.push(i);
}

function shuffle(arr){
  var currentIndex = arr.length, temporaryValue, randomIndex;

  while (0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
  console.log(arr);
}

var shuffledList = shuffle(temporaryList); //shuffled array
var signedUpMembers = 30; //because whatever
// for(signedUpMembers){
//
// }


//upon page reload, choose x number of random boxes to fill in
