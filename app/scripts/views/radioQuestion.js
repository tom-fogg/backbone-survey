/*global IndabaSurvey, Backbone, JST*/

IndabaSurvey.Views = IndabaSurvey.Views || {};

(function () {
    'use strict';

    IndabaSurvey.Views.RadioView = Backbone.View.extend({

        template: JST['app/scripts/templates/radioQuestion.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            var that = this;
            
            //this.collection.bind('reset', this.render, this);
            console.log( this.el + "jj");
            if(this.collection && this.collection.models.length > 0){
                that.render();
            }
            //this.collection.fetch({reset: true});
            
        },

        render: function () {
            //console.log(this.collection);
            //this.$el.empty();
            var that = this;
            //console.log("-----  gallery -----");
            //console.log(this.collection.toJSON());
            if(that.collection && that.collection.length > 0){
                   for (var i = 0; i < that.collection.length; i++) {
                    //console.log("---"+this.collection.at(i).id);
                    var opt = that.collection.at(i);

                    var radV= new IndabaSurvey.Views.RadioBTN({model:opt});
                    that.$el.append(radV.render().el);


                } 
            }else{
                that.$el.html('Currently loading answers, please check back soon.')
            }
            //this.$el.html(this.template(this.model.toJSON()));

        }


    });

})();
