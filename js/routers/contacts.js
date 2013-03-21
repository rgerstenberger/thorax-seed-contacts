new (Backbone.Router.extend({
  routes: module.routes,
  index: function(){
  	var contactone = new Application.Models["contacts/Contact"]({
  		firstname: "Rob",
  		lastname: "Gerstenberger",
  		email: "rgerstenberger@example.com",
  		phone: "425 894 4445"
  	});

  	var contacttwo = new Application.Models["contacts/Contact"]({
  		firstname: "James",
  		lastname: "Gerstenberger",
  		email: "Jag@example.com",
  		phone: "425 555 5555"
  	});

  	var collection = new Application.Collections["contacts/Contacts"]([
  		contactone,
  		contacttwo
  	]);
  	var view = new Application.Views["contacts/index"]({
  		collection: collection
  	});
  	Application.setView(view);
  }
}));