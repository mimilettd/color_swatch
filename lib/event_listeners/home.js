const $ = require('jQuery');
const Ajax = require('../ajax_requests/Ajax')

$( document ).ready(function() {
  Ajax.topColor()
});

$( "button" ).click(function() {
  let area = document.getElementById("textarea");
  let value = area.value
});
