/*global IndabaSurvey, Backbone*/

IndabaSurvey.Models = IndabaSurvey.Models || {};

(function () {

    IndabaSurvey.Models.QuestionModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
            console.log("yo")
        },

        defaults: {
            'id':0,
            'type':'check',
            'choices' : [],
            'answered' : false
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
