
/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */
var vanillaPress = {

  init: function() {

    // Add any functions here you want
    // to run to start the application
    // console.log( jsonData );
    model.init();
    router.init();
    view.init();
    editor.init();

  }

};

vanillaPress.init();

// Add your custom code starting here:
