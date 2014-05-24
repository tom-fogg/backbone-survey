/*global IndabaSurvey, Backbone*/

IndabaSurvey.Models = IndabaSurvey.Models || {};

(function () {
    

    IndabaSurvey.Models.Question = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
