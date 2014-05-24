/*global IndabaSurvey, Backbone*/

IndabaSurvey.Collections = IndabaSurvey.Collections || {};

(function () {

    IndabaSurvey.Collections.RadioCollection = Backbone.Collection.extend({

        model: IndabaSurvey.Models.Radios

    });

})();
