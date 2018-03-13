// import { journal, vowelCount, consonantCount, getTeaser} from './journal';
// import {checkSolution} from './sudoku.js';
import {processSolution} from './sudoku.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {

  var sudokuArray = [
    "_", "_", 3, "_", 2, "_", 6, "_", "_",
    9, "_", "_", 3, "_", 5, "_", "_", 1,
    "_", "_", 1, 8, "_", 6, 4, "_", "_",
    "_", "_", 8, 1, "_", 2, 9, "_", "_",
    7, "_", "_", "_", "_", "_", "_", "_", 8,
    "_", "_", 6, 7, "_", 8, 2, "_", "_",
    "_", "_", 2, 6, "_", 9, 5, "_", "_",
    8, "_", "_", 2, "_", 3, "_", "_", 9,
    "_", "_", 5, "_", 1, "_", 3, "_", "_"
  ];
  var sudokuItem = 0;
  var row = 0;
  var j = 9;
  while (j > 0) {
    var i = 9;
    while (i > 0) {
      if (sudokuItem % 3 === 0) {
        // $('.sudoku').append("<span class='sudokuItem third'>"+ sudokuArray[sudokuItem] +"</span>");
        if (sudokuArray[sudokuItem] === "_") {
          $('.sudoku').append('<input type="text" class="third sudokuItem" name="usrname" maxlength="1" placeholder="' + sudokuArray[sudokuItem] + '">');
        } else {
          $('.sudoku').append('<input type="text" class="third sudokuItem" name="usrname" maxlength="1" disabled="disable" value="' + sudokuArray[sudokuItem] + '">');
        }
      } else {
        if (sudokuArray[sudokuItem] === "_") {
          $('.sudoku').append('<input type="text" class="sudokuItem" name="usrname" maxlength="1" placeholder="' + sudokuArray[sudokuItem] + '">');
        } else {
          $('.sudoku').append('<input type="text" class="sudokuItem" name="usrname" maxlength="1" disabled="disable" value="' + sudokuArray[sudokuItem] + '">');
        }
      }
      i = i-1;
      sudokuItem = sudokuItem+1;
    }
    $('.sudoku').append("<span class='br'> </span><br>");
    row = row+1;
    console.log(row);
    if (row % 3 === 0){
      $('.sudoku').append("<div class='hr'></div>");
    }
    j = j-1;
  }

  $('#sudokuSolution').submit(function(event) {
    event.preventDefault();
    processSolution();
  });
});
