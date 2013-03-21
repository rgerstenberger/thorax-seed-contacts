Application.Collection.extend({
  name: "contacts/Contacts",
  model: Application.Models["contacts/Contact"]
});

// Instances of this collection can be created by calling:
// new Application.Collections["contacts/Contacts"]()