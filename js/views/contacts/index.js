Application.View.extend({
  name: "contacts/index",
  events: {
  	"submit form": function(){
  		event.preventDefault();
  		var attrs = this.serialize();
  		this.collection.add(attrs);
  		this.$('input[type!="submit"]').val('');
  	},
  	"click a": function(){
  		event.preventDefault();
  		var id = $(event.srcElement).data("model-cid");
        var item = this.collection.get(id);
  		this.collection.remove(item);
  	}
  }
});

// Instances of this view can be created by calling:
// new Application.Views["contacts/index"]()