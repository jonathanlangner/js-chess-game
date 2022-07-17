// a8 - h8
// continues until
// a1 - h1

const Menu = document.querySelector("#menu");
const Game = document.querySelector("#chess-board");
const pawnList = [];


let GLOBALACTIVE = 0;   //! The Current Square Selection on the Board 
let GLOBALPREVIOUS = 1; //! The Previous Selection on the Board
let _globalWhiteSquareClassName = "";
let _globalBlackSquareClassName = "";   

// TODO: DONE
const Board = []; 
const letterIndex = ['a','b','c','d','e','f','g','h','i','j',
                 'k','l','m','n','o','p','q','r','s',
                 't','u','v','w','x','y','z'];


// End count for an 8x8 grid. 64 squares to map by default.
// Having other variants allows to build Grand Chess 16x16 board
// TODO: DONE
const generateBoard = function(gridSize = 8, done = false){
    let endCount = 0;
    let i = 0;
    let letterICount = 0;
    let gridComp = 0;
    let oddSquare = true;
    let oddRow = true;
    let blackPieceNum = 0;
    let whitePieceNum = 0;

    if(gridSize === 8){
        endCount = 64;
        i = gridSize;
        _globalWhiteSquareClassName = "white-square";
        _globalBlackSquareClassName = "black-square";
    }
    else if(gridSize === 10){
        endCount = 100;
        i = gridSize;
        _globalWhiteSquareClassName = "white-square-10";
        _globalBlackSquareClassName = "black-square-10";
    }
    else if(gridSize === 16){
        endCount = 256;
        i = gridSize;
        _globalWhiteSquareClassName = "white-square-16";
        _globalBlackSquareClassName = "black-square-16";
    }
    else{
        alert("ERROR: Board Size Must Be: 8x8 (Standard), 10x10 or 16x16");
        return 1;
    }

    while(done === false){
        if(gridComp === gridSize){
            return 0;
        }
        if(letterICount < gridSize){
            const boardSquare = document.createElement("div");
            if(oddRow){
                    if(oddSquare === true){
                        boardSquare.className = _globalWhiteSquareClassName;
                        boardSquare.id = `${letterIndex[letterICount]}${i}`;
                        //White Side of Board
                        if(gridComp === gridSize - 2){
                            boardSquare.className += " white pawn";
                            boardSquare.textContent = "♟";
                        }
                        //Black Side of Board
                        if(gridComp === 0){
                            if(letterICount === 0){
                                boardSquare.className += " black rook";
                                boardSquare.textContent += "♜";
                            }
                            else if(letterICount === gridSize - 2){
                                boardSquare.className += " black knight";
                                boardSquare.textContent += "♞";
                            } 
                            else if(letterICount === gridSize - gridSize + 2){
                                boardSquare.className += " black bishop";
                                boardSquare.textContent += "♝";
                            }
                            else if(letterICount === Math.round(gridSize / 2)){
                                boardSquare.className += " black king";
                                boardSquare.textContent += "♚";
                            }
                            else if( _globalBlackSquareClassName === "black-square-10" && letterICount === 4){
                                boardSquare.className += " black queen";
                                boardSquare.textContent += "♛";
                            }
                            else{
                                if(blackPieceNum === 0){
                                    boardSquare.className += " black rook";
                                    boardSquare.textContent += "♜";
                                    blackPieceNum++;
                                }
                                else if(blackPieceNum === 1){
                                    boardSquare.className += " black knight";
                                    boardSquare.textContent += "♞";
                                    blackPieceNum++;
                                }
                                else{
                                    boardSquare.className += " black bishop";
                                    boardSquare.textContent += "♝";
                                    blackPieceNum = 0;
                                }
                            } 
                        }
                        Game.appendChild(boardSquare);
                        oddSquare = false;
                    }
                    else{
                        boardSquare.className = _globalBlackSquareClassName;
                        boardSquare.id = `${letterIndex[letterICount]}${i}`;
                        //White Side of Board
                        if(gridComp === gridSize - 2){
                            boardSquare.className += " white pawn";
                            boardSquare.textContent = "♟";
                        }
                        //Black Side of Board
                        if(gridComp === 0){
                            if(letterICount === gridSize - 1){
                                boardSquare.className += " black rook";
                                boardSquare.textContent += "♜";
                             }
                             else if(letterICount === gridSize - gridSize + 1){
                                boardSquare.className += " black knight";
                                boardSquare.textContent += "♞";
                            }
                            else if(letterICount === gridSize - 3){
                                boardSquare.className += " black bishop";
                                boardSquare.textContent += "♝";
                            }
                            else if(letterICount === Math.round(gridSize / 2 - 1)){
                                boardSquare.className += " black queen";
                                boardSquare.textContent += "♛";
                            }
                            else if( _globalBlackSquareClassName === "black-square-10" && letterICount === 5){
                                boardSquare.className += " black king";
                                boardSquare.textContent += "♚";
                            }
                            else{
                                if(blackPieceNum === 0){
                                    boardSquare.className += " black rook";
                                    boardSquare.textContent += "♜";
                                    blackPieceNum++;
                                }
                                else if(blackPieceNum === 1){
                                    boardSquare.className += " black knight";
                                    boardSquare.textContent += "♞";
                                    blackPieceNum++;
                                }
                                else{
                                    boardSquare.className += " black bishop";
                                    boardSquare.textContent += "♝";
                                    blackPieceNum = 0;
                                }
                            }
                        }
                        Game.appendChild(boardSquare);
                        oddSquare=true;
                    }
                }
            else{
                if(oddSquare === true){
                    boardSquare.className = _globalBlackSquareClassName;
                    boardSquare.id = `${letterIndex[letterICount]}${i}`;
                    //Black Side of Board
                    if(gridComp === gridSize - gridSize + 1){
                        boardSquare.className += " black pawn";
                        boardSquare.textContent = "♟";
                    }
                     //White Side of Board.
                    if(gridComp === gridSize-1){
                        if(letterICount === 0){
                            boardSquare.className += " white rook";
                            boardSquare.textContent += "♜";
                        }
                        else if(letterICount === gridSize - 2){
                            boardSquare.className += " white knight";
                            boardSquare.textContent += "♞";
                        } 
                        else if(letterICount === gridSize - gridSize + 2){
                            boardSquare.className += " white bishop";
                            boardSquare.textContent += "♝";
                        }
                        else if(letterICount === Math.round(gridSize / 2)){
                            boardSquare.className += " white king";
                            boardSquare.textContent += "♚";
                        }
                        else if( _globalBlackSquareClassName === "black-square-10" && letterICount === 4){
                            boardSquare.className += " white queen";
                            boardSquare.textContent += "♛";
                        }
                        else{
                            if(whitePieceNum === 0){
                                boardSquare.className += " white rook";
                                boardSquare.textContent += "♜";
                                whitePieceNum++;
                            }
                            else if(whitePieceNum === 1){
                                boardSquare.className += " white knight";
                                boardSquare.textContent += "♞";
                                whitePieceNum++;
                            }
                            else{
                                boardSquare.className += " white bishop";
                                boardSquare.textContent += "♝";
                                whitePieceNum = 0;
                            }
                        } 
                    }
                   
                    Game.appendChild(boardSquare);
                    oddSquare = false;
                }
                else{
                    boardSquare.className = _globalWhiteSquareClassName;
                    boardSquare.id = `${letterIndex[letterICount]}${i}`;
                    //Black Side of Board
                    if(gridComp === gridSize - gridSize + 1){
                        boardSquare.className += " black pawn";
                        boardSquare.textContent = "♟";
                    }
                    //White Side of Board.
                    if(gridComp === gridSize-1){
                        if(letterICount === gridSize - 1){
                            console.log(letterICount);
                            boardSquare.className += " white rook";
                            boardSquare.textContent += "♜";
                         }
                         else if(letterICount === gridSize - gridSize + 1){
                            boardSquare.className += " white knight";
                            boardSquare.textContent += "♞";
                        }
                        else if(letterICount === gridSize - 3){
                            boardSquare.className += " white bishop";
                            boardSquare.textContent += "♝";
                        }
                        else if(letterICount === Math.round(gridSize / 2 - 1)){
                            boardSquare.className += " white queen";
                            boardSquare.textContent += "♛";
                        }
                        else if( _globalBlackSquareClassName === "black-square-10" && letterICount === 5){
                            boardSquare.className += " white king";
                            boardSquare.textContent += "♚";
                        }
                        else{
                            if(whitePieceNum === 0){
                                boardSquare.className += " white rook";
                                boardSquare.textContent += "♜";
                                whitePieceNum++;
                            }
                            else if(whitePieceNum === 1){
                                boardSquare.className += " white knight";
                                boardSquare.textContent += "♞";
                                whitePieceNum++;
                            }
                            else{
                                boardSquare.className += " white bishop";
                                boardSquare.textContent += "♝";
                                whitePieceNum = 0;
                            }
                        }
                    }
                    Game.appendChild(boardSquare);
                    oddSquare=true;
                }

            }    
            
            Board.push(document.querySelector(`#${letterIndex[letterICount]}${i}`));
            letterICount++;
        }
        else{
            i--;
            letterICount = 0;
            gridComp++;
            oddRow ? oddRow = false : oddRow = true;
        }
    }
    return 1;

}

//A Function which is used to clean up the class names for selections.
const cleanPreviousSelection = function(){
    if(GLOBALACTIVE !== 0 
        && GLOBALACTIVE.classList.contains("white-square-clicked")){
        GLOBALACTIVE.classList.remove("white-square-clicked"); 
    }
    else if(GLOBALACTIVE !== 0){
        GLOBALACTIVE.classList.remove("black-square-clicked"); 
    }
    if(GLOBALACTIVE !== 0 
        && GLOBALACTIVE.classList.contains("black-square-clicked")){
        GLOBALACTIVE.classList.remove("black-square-clicked"); 
    }
    else if(GLOBALACTIVE !== 0){
        GLOBALACTIVE.classList.remove("white-square-clicked"); 
    }
}
// TODO: Check whether the current square has any selected piece.
// TODO: Return the identity of that piece, or no piece selected.
const checkSelection = function(id){
    let castled = false;
    let currentSelectPostion = GLOBALACTIVE.id;
    let numericIndex = currentSelectPostion[1];
    let letter = currentSelectPostion[0];
    let possibleMove = [];
    let i = 0;
    let letterIndex = 0;
    let firstMove = true;
    if(GLOBALACTIVE.classList.contains("pawn") 
    && GLOBALACTIVE.classList.contains("black")){
        if(firstMove === true){
            while(i < 2){
                possibleMove[i] = document.querySelector(`#${letter + --numericIndex}`);
                possibleMove[i].classList += " possible-move";
                console.table(possibleMove[i]);
                i++;
            } 
        }
       else{
        while(i < 1){
            possibleMove[i] = document.querySelector(`#${letter + --numericIndex}`);
            possibleMove[i].classList += " possible-move";
            console.table(possibleMove[i]);
            i++;
        } 
       }
    }
    else if(GLOBALACTIVE.classList.contains("pawn") 
    && GLOBALACTIVE.classList.contains("white")){
        
        if(firstMove === true){
            while(i < 2){
                possibleMove[i] = document.querySelector(`#${letter + ++numericIndex}`);
                possibleMove[i].classList += " possible-move";
                console.table(possibleMove[i]);
                i++;
            }
        }
        else{
            while(i < 1){
                possibleMove[i] = document.querySelector(`#${letter + ++numericIndex}`);
                possibleMove[i].classList += " possible-move";
                console.table(possibleMove[i]);
                i++;
            }
        }
        
        
    }
    
}

// TODO: Shows a possible set of moves for the selected piece.
const showPossibleMoves = function(){
    
}

// TODO: Checks for Check Mate
const checkForMate = function(){

}

// TODO: Checks for Castle. (Allowed once per game.)
const castleCheck = function(){

}

// TODO: Checks a move prior to moving a piece.
// ? Check Mate, castle, first move pawn, en passe, 
// ? taking pieces, and all typical moves need to be covered here.
const checkMove = function(id){

}



// TODO: Moves a piece based on the type of piece from checkSelection. 
// TODO: Displays a message if move is not allowed.
const movePiece = function(){

}


/*
    selectBoardSquare Checks to See Which Square was clicked, 
    and it changes the class name based on that selection.
    Additionally: selectBoardSquare sets GLOBALPREVIOUS, AND GLOBALSELECT

*/
// ? Still a bit buggy.
const selectBoardSquare = function(){
    let squareState = 0; // A variable which is used as check for the current square state.
    for(let i= 0; i < Board.length; i++){
        Board[i].addEventListener("click", function(e){
            if(e.target.classList.contains(_globalBlackSquareClassName)){
                e.target.className = e.target.className + " " + " black-square-clicked";
                cleanPreviousSelection();
                GLOBALACTIVE = e.target;
                if(GLOBALACTIVE.id === GLOBALPREVIOUS.id && squareState === 0){
                    cleanPreviousSelection();
                    squareState = 1;
                }
                else if(squareState === 1){
                    e.target.className = e.target.className + " " +  " black-square-clicked";
                    squareState = 0;
                }
            } 
            else if(e.target.classList.contains(_globalWhiteSquareClassName)){
                e.target.className = e.target.className + " "  + " white-square-clicked";
                cleanPreviousSelection();
                GLOBALACTIVE = e.target;
                console.log("HMM 2...");
                if(GLOBALACTIVE.id === GLOBALPREVIOUS.id && squareState === 0){
                    cleanPreviousSelection();
                    squareState = 1;
                }
                else if(squareState === 1){
                    e.target.className = e.target.className + " " + " white-square-clicked";
                    squareState = 0;
                }
            }
            alert(e.target.classList);
            // checkSelection(); INPROGRESS
            GLOBALPREVIOUS = e.target; //! PREVIOUS MUST BE SET HERE AFTER THE FIRST SELECTION.
        }); 
    }
}


const runGameStandard = function(){
    generateBoard(8, false);
    Menu.style.display = "none";
    Game.style.display = "flex";
    // numMapBoard(64,8);
    console.log(Board);
    selectBoardSquare();
}
const runGame10 = function(){
    generateBoard(10, false);
    Menu.style.display = "none";
    Game.style.display = "flex";
    // numMapBoard(64,8);
    console.log(Board);
    selectBoardSquare();
}
const runGame16 = function(){
    generateBoard(16, false);
    Menu.style.display = "none";
    Game.style.display = "flex";
    // numMapBoard(64,8);
    console.log(Board);
    selectBoardSquare();
}
