/*global IndabaSurvey, Backbone*/

IndabaSurvey.Collections = IndabaSurvey.Collections || {};

(function () {
    

    IndabaSurvey.Collections.Questions = Backbone.Collection.extend({

        model : IndabaSurvey.Models.Question ,
        url: '/questions.json'



    });

})();
