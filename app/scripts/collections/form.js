/*global IndabaSurvey, Backbone*/

IndabaSurvey.Collections = IndabaSurvey.Collections || {};

(function () {
    'use strict';

    IndabaSurvey.Collections.Form = Backbone.Collection.extend({

        model: IndabaSurvey.Models.Form,
        url: '/questions.json'

    });

})();
