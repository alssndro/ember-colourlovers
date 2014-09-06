Colourlovers.PalettesController = Ember.ArrayController.extend({
  pageNo: 1,
  listType: "top",
  queryParams: ['pageNo', 'listType'],
  itemController: "palette",

  previousPage: function() {
    var previousPageNo = this.get("pageNo") - 1;
    return previousPageNo < 1 ? 1 : previousPageNo;
  }.property("pageNo"),

  nextPage: function() {
    return this.get("pageNo") + 1;
  }.property("pageNo"),

  firstPage: function() {
    return this.get("pageNo") === 1;
  }.property("pageNo")
});
