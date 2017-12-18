const $ = require('jQuery');
const Ajax = require('../ajax_requests/Ajax')
const COLORS = require('../data/colors')
const Helpers = require('../helpers/Helpers')

class HomeHandlers {
  static matchSwatch(area, value, valueArray, colorDir) {
    let newArr = []
    colorDir.forEach(function(k) {
      if (value.match(k)) {
        newArr.push(k)
      }
    })
    this.findHex(newArr)
  }

  static findHex(newArr) {
    let swatch = []
    newArr.forEach(function(i) {
      swatch.push(COLORS[i])
    })
    let uniqueSwatch = swatch.filter( Helpers.onlyUnique )
    this.appendHexDiv(uniqueSwatch)
    this.postColorToAjax(newArr)
  }

  static appendHexDiv(uniqueSwatch) {
    uniqueSwatch.forEach(function(color) {
      $( ".colorized-text" ).append( `<div class="swatch" style="background-color:${color};"></div>` );
    })
  }

  static postColorToAjax(newArr) {
    newArr.forEach(function(color) {
      Ajax.postColor(color)
    })
  }
}

module.exports = HomeHandlers;
