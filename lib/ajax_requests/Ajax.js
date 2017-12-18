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

  static postColor(data) {
    $.post( `${baseUrl}/api/v1/colors`, { color: { value: data } } )
    .done(
      console.log("Posted successfully")
    )
  }
}

module.exports = Ajax;
