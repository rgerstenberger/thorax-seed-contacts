new (Backbone.Router.extend({
  routes: module.routes,
  index: function(){
  	var contactone = new Application.Models["contacts/Contact"]({
  		firstname: "Rob",
  		lastname: "Gerstenberger",
  		email: "rgerstenberger@example.com",
  		phone: "425 666 6666"
  	});

  	var contacttwo = new Application.Models["contacts/Contact"]({
  		firstname: "James",
  		lastname: "Gerstenberger",
  		email: "Jg@example.com",
  		phone: "425 555 5555"
  	});

  	Application.Collections.contacts = new Application.Collections["contacts/Contacts"]([
  		contactone,
  		contacttwo
  	]);
  	Application.Views.indexView = new Application.Views["contacts/index"]({
  		collection: Application.Collections.contacts
  	});
  	Application.setView(Application.Views.indexView);
  }
}));