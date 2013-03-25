Application.View.extend({
  name: "contacts/index",
  events: {
  	'submit form[name="add"]': function(){
  		event.preventDefault();
  		var attrs = this.serialize();
  		this.collection.add(attrs);
  		this.$('input[type!="submit"]').val('');
  	},
    'submit form[name="edit"]': function(){
      event.preventDefault();
      var attrs = this.serialize();
      var id = this.$('form').data("model-cid");
      var item = this.collection.get(id);
      item.set(attrs);
      this.$('input[type!="submit"]').val('');
      this.$('form').attr("name","add");
      this.$('input[type="submit"]').val('add');
    },
  	"click a.delete": function(){
  		event.preventDefault();
  		var id = $(event.srcElement).parent().data("model-cid");
        var item = this.collection.get(id);
  		this.collection.remove(item);
  	},
  "click a.edit": function(){
        event.preventDefault();
        var id = $(event.srcElement).parent().data("model-cid");
        var attrs = this.collection.get(id).attributes;
        this.$('form').attr("name", "edit");
        this.$('form').data("model-cid", id);
        this.$('input[type="submit"]').val('update');
        for( var attribute in attrs){
          this.$('input[name="' + attribute + '"]').val(attrs[attribute]);
        }
        
      },



  }
});

// Instances of this view can be created by calling:
// new Application.Views["contacts/index"]()