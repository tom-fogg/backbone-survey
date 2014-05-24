/*global IndabaSurvey, Backbone, JST*/

IndabaSurvey.Views = IndabaSurvey.Views || {};

(function () {
    'use strict';

    IndabaSurvey.Views.Questionaire = Backbone.View.extend({

        template: JST['app/scripts/templates/Questionaire.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #submit-btn' : 'submit'
        },

        el:$("#questionaire"),



        

        initialize: function () {
            var that = this
            this.collection.bind('reset', this.render, this);
            this.collection.fetch({reset: true});
            
        },

        render: function () {
            //console.log(this.collection);
            this.$el.empty();
            this.$el.html(this.template());
            var form = this.$el.find('.main-form')
            
            //console.log("-----  gallery -----");
            //console.log(this.collection.toJSON());
            if(this.collection.length > 0){
                   for (var i = 0; i < this.collection.length; i++) {
                    //console.log("---"+this.collection.at(i).id);
                    var question = this.collection.at(i);

                    var qv = new IndabaSurvey.Views.Question({model:question});
                    form.append(qv.render().el);


                } 
            }else{
                that.$el.html('Currently loading questions, please check back soon.')
            }
            //this.$el.html(this.template(this.model.toJSON()));

        },
        submit: function(){
            console.log("fu");
            IndabaSurvey.submit();
        }

    });

})();
