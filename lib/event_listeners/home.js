const $ = require('jQuery');
const Ajax = require('../ajax_requests/Ajax')
const COLORS = require('../data/colors')

$( document ).ready(function() {
  Ajax.topColor()
});

$( "button" ).click(function() {
  let area = document.getElementById("textarea");
  let value = area.value
  let colorDir = Object.keys(COLORS)
  let newArr = []
  colorDir.forEach(function(element) {
    newArr.push(value.match(`/${element}/gi`))
  })
  debugger
  let match = value.match(/red/g);
});
