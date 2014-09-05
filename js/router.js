Colourlovers.Router.map(function(){
  this.resource('palettes', { path: '/' }, function(){
    this.resource('palette', { path: '/palettes/:palette_id' });
  });
});

Colourlovers.PalettesRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://www.colourlovers.com/api/palettes/top?format=json&showPaletteWidths=1&jsonCallback=?');
  }
});

Colourlovers.PaletteRoute = Ember.Route.extend({
  model: function(params) {
    var url = 'http://www.colourlovers.com/api/palette/'
              + params.palette_id + 
              '?format=json&showPaletteWidths=1&jsonCallback=?';
              console.log("Inside model: " + url);
    return Ember.$.getJSON(url).then(function(data){
      console.log("Fetching");
      return data[0];
    });
  }
});
