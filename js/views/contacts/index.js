Application.View.extend({
  name: "contacts/index",
  events: {
  	"click a.delete": function(){
  		event.preventDefault();
  		var id = $(event.srcElement).parent().data("model-cid");
        var item = this.collection.get(id);
  		this.collection.remove(item);
  	}
  }
});

// Instances of this view can be created by calling:
// new Application.Views["contacts/index"]()