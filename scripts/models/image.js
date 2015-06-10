/**
 * Created by firewaterjoe on 6/10/15.
 */
var Image = Backbone.Model.extend({
    idAttribute: '_id',
    defaults:{
        caption: "",
        url:""
    }
});

var ImageCollection = Backbone.Collection.extend({
   model: Image,
    url: "http://tiny-lasagna-server.herokuapp.com/collections/matts_images"
});

export default {Image, ImageCollection};