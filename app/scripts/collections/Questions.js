/*global IndabaSurvey, Backbone*/

IndabaSurvey.Collections = IndabaSurvey.Collections || {};

(function () {
    'use strict';

    IndabaSurvey.Collections.Questions = Backbone.Collection.extend({

        model: IndabaSurvey.Models.Questions

    });

})();
