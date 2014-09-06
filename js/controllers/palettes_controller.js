Colourlovers.PalettesController = Ember.ArrayController.extend({
  pageNo: 1,
  listType: "top",
  queryParams: ['pageNo', 'listType'],
  itemController: "palette",
  
  nextPage: function() {
    return this.get("pageNo") + 1
  }.property("pageNo")
});
