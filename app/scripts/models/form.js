/*global IndabaSurvey, Backbone*/

IndabaSurvey.Models = IndabaSurvey.Models || {};

(function () {
    'use strict';

    IndabaSurvey.Models.Form = Backbone.Model.extend({

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
