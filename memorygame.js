
var colorArray = ["red","blue","green","yellow","orange","purple","black","pink","red","blue","green","yellow","orange","purple","black","pink"];
var counter = 0;
var firstCell = "";
var secondCell = "";

$(function(){
  
    //All DOM code goes here
    
    //All functions will get called from here   

    //Our goal is to do a set of steps when a cell is clicked
    //For this first, assign "cellClick" to the click event for all divs that have class as "cell"  
    $(".cell").on("click", cellClick);

})


function cellClick(cell)
{    
    //Goal is to find if the 2 clicked cells are of the same color.    
    
    //Inside the parameter we are receiving the cell object "cell" that was clicked
    //1. So for all cell manipulation, use the cell object.
    
    //2. First let us assign a background color to the cell from the colorArray
    //For example, if cell 0 is clicked assign colorArray[0] as the background color 
    //to the cell
    if (counter == 0) {
        resetboard();
    }


    var i = $(this).attr("id");
    $(this).css({ "background-color": colorArray[i] });

    counter++;

    //Stop and test change #1

    if (counter == 1) {
        console.log("First cell clicked");
        firstCell = $(this).css("background-color");
        console.log(firstCell);
    } else if (counter == 2) {
        console.log("Second cell clicked");
        secondCell = $(this).css("background-color");
        console.log(secondCell);

        if (firstCell.toString() == secondCell.toString()) {
            console.log("Winner!");
            setMessage("You Won!");
            shuffle(colorArray);
        }
        else {
            console.log("No winner");
            setMessage("Try again.");
        }

        counter = 0;
        
    }

    

    /*We need to know if the cell that is clicked is the first cell or the second cell.
    4. So let us add a counter and increment this counter
    write the counter value to console.log. test it.

    5. Use the counter to see if this is the first cell that was clicked
    write "first cell clicked" to console.log. test it.

    6. Use the counter to see if this is the second cell that was clicked
    write "second cell clicked to console.log". test it.*/
    
    //Stop and test change #2


    /* 
    7. If the first cell clicked(use counter to find this), let us save the first cell to a variable called firstCell.
    
    8. if second cell is clicked(use counter to find this), we need to see if the color of the second cell matches the background color of firstCell.
    
    9. If the colors match, there is a winner.
    write "winner" to console.log

    10. If the colors don't match, there is no winner.
    write "no winner" to console.log
    */

    //Stop and test change #3
    
    /*If there is a winner, then 
    11. Let us set the innerHtml of the div with id="status" to "You win"=>Call a function called setMessage(msg)
    12. Let us shuffle the color array => Call a function called shuffle(colorArray)
    13. Let us reset the board => Call a function called resetBoard()
     */

    //Stop and test the change #4

    /*If there is no winner, then    
    15.Let us set the innerHTML of the div with id="status" to "Try again!"=>Call a function called setMessage(msg)
    16.Don't shuffle the color array otherwise the colors will change everytime and no one can win
    17.Let us reset the board so that all cells look the same => Call a function called resetBoard()
    */

     //Stop and test the change #5

}

function resetboard()
{   
    $(".cell").css({ "background-color": "" });
    setMessage("");
}

function setMessage(msg)
{
    //Goal is to get the div with id = "status" and set its innerHTML to the input parameter msg
    $("#status").text(msg);

}

function shuffle(array)
{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }   
}
