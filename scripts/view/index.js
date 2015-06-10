/**
 * Created by firewaterjoe on 6/10/15.
 */
// ================View==================
var ImageView = Backbone.View.extend({
    template: JST.index,
    initialize: function(){
        this.listenTo(this.collection, 'update',this.render

        );
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.collection.toJSON()));
    }
});



export default ImageView;