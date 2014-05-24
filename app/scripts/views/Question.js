/*global IndabaSurvey, Backbone, JST*/

IndabaSurvey.Views = IndabaSurvey.Views || {};

(function () {
    'use strict';

    IndabaSurvey.Views.Question = Backbone.View.extend({

        template: JST['app/scripts/templates/Question.ejs'],

        checkTemplate: JST['app/scripts/templates/checkQuestion.ejs'],

        radioTemplate: JST['app/scripts/templates/RadioBTN.ejs'],

        rankTemplate: JST['app/scripts/templates/rankItem.ejs'],

        textTemplate: JST['app/scripts/templates/textBox.ejs'],

        tagName: 'div',

        id: '',

        className: 'question-box',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);

        },

        render: function () {

            console.log(this.model.get("type") + " ---<")
            console.log(this.model.toJSON())
             this.$el.html(this.template(this.model.toJSON()));
            //console.log(this.model.toJSON());
            // console.log(this.model.toJSON());
            
            switch(this.model.get('type')){
                case 'radio':
                    for (var i = 0; i < this.model.get('choices').length; i++) {
                        this.$el.find('.answer-box').append(this.radioTemplate(this.model.get('choices')[i]));
                    };
                    break;
                case 'check':
                    for (var i = 0; i < this.model.get('choices').length; i++) {
                        console.log( JSON.stringify(this.model.get('choices')[i]) );
                        this.$el.find('.answer-box').append(this.checkTemplate(this.model.get('choices')[i]));
                    };

                    break;
                case 'text':
                    this.$el.find('.answer-box').append(this.textTemplate(this.model.get('choices')[i]));
                    break;
                case 'rank':
                    for (var i = 0; i < this.model.get('choices').length; i++) {
                        console.log( JSON.stringify(this.model.get('choices')[i]) );
                        this.$el.find('.answer-box').append(this.rankTemplate(this.model.get('choices')[i]));
                    };
                    break;
                default :
                    this.$el.append('invalid question type');
            }
            return this;
        }

    });

})();
