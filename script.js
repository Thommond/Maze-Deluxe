//creating the table for level one
let createTable = () => {
  //get the body
let body = document.getElementsByTagName('body')[0];
//creats a table element and a tbody element
let table = document.createElement('table');
let tbody = document.createElement('tbody');


//creating all the cells
  for(let count = 0; count < 22; count++) {
    //creates table row
  let row =  document.createElement("tr");

    for(let count2 = 0; count2 < 22; count2++) {
      //Creates a td element and a text node, make the
      //node the contents of the td and put the td at
      //the end of the table row
      let cell = document.createElement('td');
      let cellText = document.createTextNode('a');
    cell.appendChild(cellText);
    row.appendChild(cell);
    }
    //adding the row to the end of the table body
   tbody.appendChild(row);
  }
  //adding the table body to the table
table.appendChild(tbody);
//adding the table to the body
body.appendChild(table);
//sets the border attribute of table to 2
table.setAttribute("border","1");
table.setAttribute("width","800");
table.setAttribute("height","800");
};
//calling the function
createTable();
/*
//selecting the p element with the Id of mover
let mover = document.getElementById("mover");
//an eventListener to add ability to move


window.addEventListener("keydown", event => {
  //location is equal to zero
  let location = 0;
//condition which states that if key "w" is pressed then anything with in will occur
if (event.key == "w") {
//setting the binding newLocation to the location binding minus 20
console.log(location)
  let newLocation = location - 20;
  console.log(newLocation)
  //mover.style.top is being set equal to the newLocation binding plus the string of px;
  mover.style.top = newLocation + "px";

console.log("test");
}

else if (event.key == "s") {

  let newLocation = location + 20;
  mover.style.top = newLocation + "px";

console.log("test2");
}

else if (event.key == "a") {
  let newLocation = location -  20;
  mover.style.left = newLocation + "px";
console.log("test3");
}

else if (event.key == "d") {
  let newLocation = location + 20;
  mover.style.left = newLocation + "px";
  console.log(mover.style.left)
console.log("test4");
} });
*/

}






/*
level-1
#########################################
!.......................#...............#
#...#################...#...#########...#
#...#.......#.......#...#...#...........#
#...#...#...#...#...#...#...#...#####...#
#...#...#.......#.......#...#...#...#...#
#...#########...#############...#...#...#
#...........#...............#...#...#...#
#########################...#...#...#...#
#.......................#...#...#.......#
#...#################...#...#...#########
#...#...............#...#...#...........#
#...#############...#...#...#####...#...#
#.......#.......#.......#.......#...#...#
#...#...#...#...#...#########...#####...#
#...#.......#...#...........#.......#...#
#############...#################...#...#
#...............#.......#.......#.......#
#...#############...#...#...#...#####...#
#...................#.......#...........#
#######################################_#
*/
