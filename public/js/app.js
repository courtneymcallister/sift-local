var totalBoxes = 500;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

console.log(screenWidth);
console.log(screenHeight);

//width (px) of one box = screenWidth/columns
//height (px) of one box = screenHeight/rows

var rows = 20;
var columns = 25;
for (var i = 0; i < rows; i++){
  for(var p = 0; p < columns; p++){
    var new_col_div = document.createElement("div");
    new_col_div.className = "redstrip";
    document.body.appendChild(new_col_div);
    new_col_div.id = `${i}, ${p}` //tag each box with the id row,column
  }
  var new_row_div = document.createElement("div");
  new_row_div.className = "bluestrip";
  document.body.appendChild(new_row_div);
  console.log("This is repeat " + i);
}

//upon page reload, choose x number of random boxes to fill in
