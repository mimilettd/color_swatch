const $ = require('jQuery');
const baseUrl = "https://color-swatch-api.herokuapp.com"

class Ajax {
  topColor() {
    $.ajax({
      url: `${baseUrl}/api/v1/top_color`,
      data: data,
      success: success,
      dataType: "json"
    }).done(function() {
      $(this).addClass("top-color")
    })
  }
}

module.exports = Ajax;
