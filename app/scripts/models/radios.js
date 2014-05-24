/*global IndabaSurvey, Backbone*/

IndabaSurvey.Models = IndabaSurvey.Models || {};

(function () {
    'use strict';

    IndabaSurvey.Models.Radios = Backbone.Model.extend({

        url: '',
        defaults: {
            value: 'an item',
            units: []
        },

        initialize: function() {
        },

        
        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
