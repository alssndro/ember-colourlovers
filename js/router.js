Colourlovers.Router.map(function(){
  this.resource('palettes', { path: '/' }, function(){
    this.resource('palette', { path: '/:palette_id' });
  });
});

Colourlovers.PalettesRoute = Ember.Route.extend({
  model: function(params) {
    var resultOffset = (params.pageNo - 1) * 16;
    return Ember.$.getJSON('http://www.colourlovers.com/api/palettes/' + params.listType + '?format=json&showPaletteWidths=1&resultOffset=' + resultOffset + '&jsonCallback=?');
  },
  actions: {
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
