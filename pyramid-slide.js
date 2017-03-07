
/**
 * determineHeightAndThenDrawPyramid
 * Determines the current value from the heightStr variable
 */
function determineHeightAndThenDrawPyramid() {

    var heightStr = document.getElementById("height").value;
    // here we convert the string to an int
    height = parseInt(heightStr);

    drawPyramid(height)
}



/**
 * drawPyramid
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */

function drawPyramid(height) {
    
     // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML = " ";
    //grab symbol from select menu
     var symbol = document.getElementById("symbol").value
      // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += symbol;
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
