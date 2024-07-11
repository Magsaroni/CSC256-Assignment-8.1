   

       // create a function to build the chessboard.
   function createChessboard(chessboard){
       // a typical chessboard has 8 rows and 8 columns. We will build those w a nested loops.
       for (var i=0; i< 8; i++){
           // loop to build the columns
           for (var j=0; j < 8; j++){
               //squares here.
               var chessSquare = document.createElement("div");

               // assign a css class to each square.
               chessSquare.className = "chessSquare";

               //check to see if this an even or odd square.
               // % is modulus (mod) it divides the first number by the second number but only returns the remainder. If the remainder is 0 when our row+column is divided by 2, then it was an
               //(+)even number.
               if((i+j) % 2 == 0){
                   chessSquare.style.backgroundColor = "#1E21B6";
               }

               // add the chess square to the board div
               chessboard.appendChild(chessSquare);
           }
       } 
}
