define('finalproject/controllers/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      search: function search() {
        //e.preventDefault();

        console.log(this.get("item"));

        var url = 'https://api.nutritionix.com/v1_1/search';
        var data = {
          "appId": "74327998",
          "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
          "query": this.get("item"),
          "fields": ["item_name", "brand_name", "nf_calories", "nf_serving_size_qty", "nf_serving_size_unit"],
          "sort": {
            "field": "_score",
            "order": "desc"
          },
          "filters": {
            "item_type": 2
          }
        };

        return $.ajax({
          url: url,
          type: "POST",
          data: data,
          success: function success(data) {
            console.log(data);
          },
          dataType: 'json'
        });
      }
    }
  });
});