$(function (){

// Select color input
  const colorPicker = $('#colorPicker');
// Select size input
  const heightInput = $('#inputHeight');
  const weightInput = $('#inputWeight');

//select canvas
  const canvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()

  function makeGrid() {
    canvas.find('tbody').remove();

  //submit button size changes to fit grid size
    var gridRows = heightInput.val();
    var gridCol = weightInput.val();

  //tbody set to the table
    canvas.append('<tbody></tbody>');

    var canvasBody = canvas.find('tbody');

  //drawing grid rows
    for (let i = 0; i < gridRows; i++) {
      canvasBody.append('<tr></tr>');
    }

  //draw grid col
    for (let i = 0; i < gridCol; i++) {
      canvas.find('tr').append('<td class="transparent"></td>');
    }
  }

//update grid when submit button clicked
  $(document).ready(function(){
    $('input[type="submit"]').on('click', function(e){
      e.preventDefault();
      makeGrid();
    });

  //toggle grid color
    $('#pixelCanvas').on('click', 'td', function(e){
      var color = colorPicker.val();
      var currentColor = $(this).css('background-color');
      console.log(currentColor + ' color:' + color);

      if ($(this).hasClass('transparent')) {
        $(this).toggleClass('transparent');
        $(this).css('background-color', color);
      } else {
        $(this).toggleClass('transparent');
        $(this).css('background-color', 'transparent');
      }
    })
  });
});