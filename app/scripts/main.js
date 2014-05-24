/*global IndabaSurvey, $*/


window.IndabaSurvey = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        
      
        // console.log(question.get('answered'));
        var questions = new IndabaSurvey.Collections.Questions();
        var questionaire = new IndabaSurvey.Views.Questionaire({collection:questions});

    },
    submit: function() {
        console.log('ready to gooi the json');
    }
};

$(document).ready(function () {
    'use strict';
    IndabaSurvey.init();

});
