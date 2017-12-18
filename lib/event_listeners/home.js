const $ = require('jQuery');
const Ajax = require('../ajax_requests/Ajax')
const COLORS = require('../data/colors')
const Helpers = require('../helpers/Helpers')
const HomeHandlers = require('../request_handlers/HomeHandler')

$( document ).ready(function() {
  Ajax.topColor()
});

document.querySelector('#textarea').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      let area = document.getElementById("textarea");
      let value = area.value
      let valueArray = value.split(" ");
      let colorDir = Object.keys(COLORS)
      HomeHandlers.matchSwatch(area, value, valueArray, colorDir)
    }
});
