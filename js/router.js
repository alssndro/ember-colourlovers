Colourlovers.Router.map(function(){
  this.resource('palettes', { path: '/' }, function(){
    this.resource('palette', { path: '/:palette_id' });
  });
});

Colourlovers.PalettesRoute = Ember.Route.extend({
  model: function(params) {
    var pageNo = params.pageNo;
    var listType = params.listType;

     // Default page size of results returned by Colourlovers API
     // Allow this to be configured?
    var pageSize = 16;

    self = this;

    if (this.pageStore.find(listType, pageNo) === undefined) {
      console.log("Page not found in cache");

      // 16 is the default page size returned by the API (REFACTOR THIS!)
      var resultOffset = (params.pageNo - 1) * pageSize;
      return Ember.$.getJSON('http://www.colourlovers.com/api/palettes/' + params.listType + '?format=json&showPaletteWidths=1&resultOffset=' + resultOffset + '&jsonCallback=?').then(function(data){
      self.pageStore.add(listType, pageNo, data);
      return data;
    });
    } else {
      console.log("Retrieving from cache....");
      return this.pageStore.find(listType, pageNo);
    }
  },

  actions: {
    // Ensure that model hook use is forced when the params change as a result of
    // the user clicking a link-to
    queryParamsDidChange: function() {
      this.refresh();
    }
  }
});

Colourlovers.PaletteRoute = Ember.Route.extend({
  model: function(params) {
    var url = 'http://www.colourlovers.com/api/palette/'
              + params.palette_id + 
              '?format=json&showPaletteWidths=1&jsonCallback=?';
    return Ember.$.getJSON(url).then(function(data){
      return data[0];
    });
  }
});
