Application.Model.extend({
  name: "contacts/Contact",
  defaults: {
  	firstname: "",
  	lastname: "",
  	phone: "",
  	email: "",
  }
});

// Instances of this model can be created by calling:
// new Application.Models["contacts/Contact"]()