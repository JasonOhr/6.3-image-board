/**
 * Created by firewaterjoe on 6/10/15.
 */
import ImageView from './view/index'
import {ImageCollection} from './models/image';
import FormView from './view/form'

var Router = Backbone.Router.extend({

    routes:{
        '': 'index',
        'form': 'form'
    },
    initialize: function(){

        this.images = new ImageCollection();
    },
    index: function(){
      var imageView = new ImageView({collection: this.images});
        //console.log(this.images.fetch());;
        //console.log(imageView);
        $('.app').html(imageView.el);

    },
    form: function (){

    }
});

export default new Router();