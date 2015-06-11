/**
 * Created by firewaterjoe on 6/10/15.
 */
var FormView = Backbone.View.extend({
    template: JST.form,
    events:{
        'click button.add-image-button': 'addImage',
        'click button.cancel-button': 'clearInfo',
        'click .add-picture': 'showForm'
    },
    initialize: function(){

        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    },
    addImage: function(e){
        e.preventDefault();
        this.collection.create({
          image_url:($('.new-url').val()),
          image_caption:($('.new-caption').val())
        });
        this.clearInfo();


    },
    clearInfo: function(){
        this.$('.new-url').val('');
        this.$('.new-caption').val('');
    },
    showForm: function(){

        this.$('.form-div').toggle(700);
    }
});

export default FormView;