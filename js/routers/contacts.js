new (Backbone.Router.extend({
  routes: module.routes,
  index: function(){
  	var contactone = new Application.Models["contacts/Contact"]({
  		firstname: "Rob",
  		lastname: "Gerstenberger",
  		email: "rgerstenberger@example.com",
  		phone: "425 666 6666",
      id: 1
  	});

  	var contacttwo = new Application.Models["contacts/Contact"]({
  		firstname: "James",
  		lastname: "Gerstenberger",
  		email: "Jg@example.com",
  		phone: "425 555 5555",
      id: 2
  	});

    Application.idPlaceholder = 3;

  	Application.Collections.contacts = new Application.Collections["contacts/Contacts"]([
  		contactone,
  		contacttwo
  	]);
  	var indexView = new Application.Views["contacts/index"]({
  		collection: Application.Collections.contacts
  	});
  	Application.setView(indexView);
  },

  detail: function(id){
    var detailView = new Application.Views["contacts/detail"]({
      model: Application.Collections.contacts.get(id)
    });
    Application.setView(detailView);
  },

  home: function(){
    var indexView = new Application.Views["contacts/index"]({
      collection: Application.Collections.contacts
    });
    Application.setView(indexView);
  },

  edit: function(id){
    var updateView = new Application.Views["contacts/update"]({
      model: Application.Collections.contacts.get(id)
    });
    Application.setView(updateView);
  },

  new: function(){
    var newContact = new Application.Models["contacts/Contact"]({
        id:Application.idPlaceholder
      });
    Application.Collections.contacts.add(newContact);
    var updateView = new Application.Views["contacts/update"]({
      model: newContact
    })    
    Application.idPlaceholder++;
    Application.setView(updateView);
  }

}));