/*global IndabaSurvey, Backbone, JST*/

IndabaSurvey.Views = IndabaSurvey.Views || {};

(function () {
    'use strict';

    IndabaSurvey.Views.Questionaire = Backbone.View.extend({

        template: JST['app/scripts/templates/Questionaire.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
