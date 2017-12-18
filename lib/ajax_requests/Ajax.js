const $ = require('jQuery');
const baseUrl = "https://color-swatch-api.herokuapp.com"

class Ajax {
  static topColor() {
    $.ajax({
      url: `${baseUrl}/api/v1/top_color`,
      type: 'GET',
      dataType: "json"
    }).done(function(data) {
      let color = data.value
      let colorCount = data.color_count
      $(".top-color").text(color);
    })
  }
}

module.exports = Ajax;
