Colourlovers.PaletteController = Ember.ObjectController.extend({
  dateCreatedString: function() {
    console.log("Model ----> " + this.get("model"));
    var date = new Date(Date.parse(this.get('model').dateCreated));
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  }.property('model.dateCreated')
});
