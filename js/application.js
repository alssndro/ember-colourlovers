// Creates a new Ember App
window.Colourlovers = Ember.Application.create({
  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_TRANSITIONS: true,
  LOG_BINDINGS: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_STACKTRACE_ON_DEPRECATION: true,
  LOG_VERSION: true,
  debugMode: true
});

var PageStore = Ember.Object.extend({
  store: {},
  find: function(listType, pageNo) {
    console.log("Searching for: " + listType + " " + pageNo);
    this.checkList(listType);
    return this.store[listType][pageNo];
  },
  add: function(listType, pageNo, data) {
    console.log("Adding: " + listType + " " + pageNo);
    this.checkList(listType);
    this.store[listType][pageNo] = data;
  },
  checkList: function(listName) {
    if (this.store[listName] === undefined) {
      this.store[listName] = {};
    }
  }
});


Colourlovers.register('pageStore:main', PageStore);
Colourlovers.inject('route', 'pageStore', 'pageStore:main');

// Want to use fixtures
// Adapters are responsible for communicating with a source of data for
// the application (usually a web API, but here we use fixture data
// Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

// Use a fixture adapter that uses localstorage to persist between application
// loads
// Colourlovers.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'colourlovers-ember-js'
// });

Ember.Handlebars.registerHelper('debug', function(the_string){
    Ember.Logger.log(the_string);
    // or simply
    console.log(the_string);
});

Ember.Handlebars.helper('drawColourBlock', function(hexColor, cssClass) {
  return new Ember.Handlebars.SafeString("<p class='" + cssClass + "' style='background-color:#" + hexColor + ";'></p>");
});

Colourlovers.PaletteColourBlocksComponent = Ember.Component.extend({
  classNames: ["clearfix", "colour-blocks"],
  showHexValue: false,
  actions: {
    toggleHexValue: function(hexValue) {
      this.toggleProperty("showHexValue");
      console.log("Inside component " + hexValue);
    }
  }
});
