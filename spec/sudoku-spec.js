import { checkSolution } from './../src/sudoku.js';

describe('checkSolution', function(){
  var sudokuSolution = [
    4, 8, 3, 9, 2, 1, 6, 5, 7,
    9, 6, 7, 3, 4, 5, 8, 2, 1,
    2, 5, 1, 8, 7, 6, 4, 9, 3,
    5, 4, 8, 1, 3, 2, 9, 7, 6,
    7, 2, 9, 5, 6, 4, 1, 3, 8,
    1, 3, 6, 7, 9, 8, 2, 4, 5,
    3, 7, 2, 6, 8, 9, 5, 1, 4,
    8, 1, 4, 2, 5, 3, 7, 6, 9,
    6, 9, 5, 4, 1, 7, 3, 8, 2
  ];
  it('take all input from form and push to an array, then compare array to solution', function(){
    expect(checkSolution(sudokuSolution, sudokuSolution)).toEqual(true);
  });
});

// // describe('checkRow', function(){
//   var sudokuSolution = [
//     4, 8, 3, 9, 2, 1, 6, 5, 7,
//     9, 6, 7, 3, 4, 5, 8, 2, 1,
//     2, 5, 1, 8, 7, 6, 4, 9, 3,
//     5, 4, 8, 1, 3, 2, 9, 7, 6,
//     7, 2, 9, 5, 6, 4, 1, 3, 8,
//     1, 3, 6, 7, 9, 8, 2, 4, 5,
//     3, 7, 2, 6, 8, 9, 5, 1, 4,
//     8, 1, 4, 2, 5, 3, 7, 6, 9,
//     6, 9, 5, 4, 1, 7, 3, 8, 2
//   ];
//   var sudoRows = [];
//   var tempRow = [];
//
//   var count = 0;
//   var i = 0;
//   sudokuSolution.forEach(function() {
//     if (i <= 8) {
//       tempRow.push(sudokuSolution[count]);
//       count += 1;
//       i = i + 1;
//     }
//     else {
//       i = 0;
//       sudoRows.push(tempRow);
//       tempRow = [];
//     }
//   });


// });
