Application.View.extend({
  name: "contacts/detail",
  events: {
  	"click button": function(){
  		event.preventDefault();
  		Application.setView(Application.Views.indexView);
  		Application.Views.indexView.render();
  	}
  }
});

// Instances of this view can be created by calling:
// new Application.Views["contacts/detail"]()