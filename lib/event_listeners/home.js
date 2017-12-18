const $ = require('jQuery');
const Ajax = require('../ajax_requests/Ajax')
const COLORS = require('../data/colors')

$( document ).ready(function() {
  Ajax.topColor()
});

$( "button" ).click(function() {
  let area = document.getElementById("textarea");
  let value = area.value
  let valueArray = value.split(" ");
  let colorDir = Object.keys(COLORS)
  let newArr = []
  colorDir.forEach(function(k) {
    if (value.match(k)) {
      newArr.push(k)
    }
  })
});
