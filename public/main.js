"use strict";

var $comment;
var $output;

$(document).ready(init);

function init(){
  $comment = $('#comment');
  $output = $('#output');
  $('#comment').on('keyup',markdownconvert);
}


function markdownconvert(event) {
event.preventDefault();

var mark = $('#comment').val();
console.log('mark' + mark);
  $.post('/markdown', {Text: mark}).success(function(data) {
    $('#output').empty().append($.parseHTML(data));
  }).fail(function(err) {
    alert('Something went wrong!!');
  });
}
