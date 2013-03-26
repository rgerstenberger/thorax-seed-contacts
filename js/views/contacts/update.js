Application.View.extend({
  name: "contacts/update",
  events: {
  	"submit form": function(){
  		  event.preventDefault();
	      var attrs = this.serialize();
	      var id = this.$('form').data("model-id");
	      var item = Application.Collections.contacts.get(id);
	      item.set(attrs);
	      Backbone.history.navigate("detail/" + id, true);
  	}
  }
});

// Instances of this view can be created by calling:
// new Application.Views["contacts/update"]()