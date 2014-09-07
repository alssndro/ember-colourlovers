Colourlovers.PaletteController = Ember.ObjectController.extend({
  dateCreatedString: function() {
    var date = new Date(Date.parse(this.get('model').dateCreated));
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  }.property('model.dateCreated')
});
