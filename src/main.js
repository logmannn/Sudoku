// import { journal, vowelCount, consonantCount, getTeaser} from './journal';

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

  // var sudokuSoluution = [
    // 4, 8, 3, 9, 2, 1, 6, 5, 7,
    // 9, 6, 7, 3, 4, 5, 8, 2, 1,
    // 2, 5, 1, 8, 7, 6, 4, 9, 3,
    // 5, 4, 8, 1, 3, 2, 9, 7, 6,
    // 7, 2, 9, 5, 6, 4, 1, 3, 8,
    // 1, 3, 6, 7, 9, 8, 2, 4, 5,
    // 3, 7, 2, 6, 8, 9, 5, 1, 4,
    // 8, 1, 4, 2, 5, 3, 7, 6, 9,
    // 6, 9, 5, 4, 1, 7, 3, 8, 2
  // ];

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

  // $('#journal-form').submit(function(event) {
  //   event.preventDefault();
  //   // var title = $('#title').val();
  //   // var description = $('#description').val();
  //   // var output = journal(description);
  //   // var vowels = vowelCount(description);
  //   // var consonants = consonantCount(description);
  //   // var teaser = getTeaser(description);
  //   // // output.forEach(function(element) {
  //   // $('#solution').append("<li>Word count: " + output + "</li>");
  //   // $('#vowelCount').append("<li>Vowel count: " + vowels + "</li>");
  //   // $('#numOfCons').append("<li>Consonant count: " + consonants + "</li>");
  //   // $('#numOfCons').append("<li>All words in a sentence: " + teaser + "</li>");
  //   // // });
  // });
});
