/**
 * Code for the Editor
 */

 /**
  *  The main Editor object
  */
 var editor = {};

 editor.currentContent = '';
 editor.unSaveContent = false;

 /**
  *  Initializes the VanillaPress App
  */
 editor.init = function() {
     // Call editor toggle listener
     editor.listenEditorToggle();
     editor.checkEditorHidden();
 };

 /**
  * Updates local storage for post or page
  * 
  */
editor.saveContent = function() {
    event.preventDefault();
    model.updateContent( editor.currentContent );
    editor.unsavedContent = false;
    editor.animateSavedBtn();
    
}

 /**
  * Updates the title when changed in the editor
  * 
  */
editor.updateTitle = function() {
    var title = helpers.getEditorTitleEl().value;

    editor.currentContent.title = title;
    editor.unsavedContent = true;
    view.updateTitle( title );
}
   /**
  * Updates the content when changed in the editor
  */
editor.updateContent = function () {
    var content = helpers.getEditorContentEl().value;

    editor.currentContent.content = content;
    editor.unsavedContent = true;
    view.updateContent(content);
}

 /**
  * Dynamically fills the edit form based on the url
  * @param (Object) contentObj Post or Page object to load
  */
 editor.fillEditForm = function( contentObj ) {
    var titleForm = helpers.getEditorTitleEl(),
    contentForm = helpers.getEditorContentEl();

    titleForm.value = contentObj.title;
    contentForm.value = contentObj.content;
    editor.addFormListeners();
 }

/**
 * Animate the update button to mimic saving data   
 */
editor.animateSavedBtn = function() {
    var btn = helpers.getEditorFormUpdateBtn(),
         saved = function() {
             setTimeout(function() {
                 btn.innerText = "Update";
             }, 1000);
         },
         saving = function() {
             setTimeout( function() {
                 btn.innerText = "saved!";
                 saved();
             }, 900 );
         };
         btn.innerText = "saving...";
         saving();   
}

 /**
  * Adds event listener to the form elements
  */
 editor.addFormListeners = function() {
     var titleForm = helpers.getEditorTitleEl(),
         contentForm = helpers.getEditorContentEl(),
         updateBtn = helpers.getEditorFormUpdateBtn();
         links = helpers.getLinks();

         titleForm.addEventListener('input', editor.updateTitle, false);
         contentForm.addEventListener('input', editor.updateContent, false);
         updateBtn.addEventListener('click', editor.saveContent, false);

         links.forEach( function( link )  {
             link.addEventListener('click', editor.protectUnsavedContent, false);
         });
 };

 /**
  * Add alert if links are clicked with unsaved content
  */
 editor.protectUnsavedContent = function() {
     if (  true === editor.unsavedContent ) {
         var confirm = window.confirm('You have unsaved content');
         if( false === confirm ) {
             event.preventDefault();
         } else {
             editor.unsavedContent = false;
         }
     }
 }

 /**
  *  Listens for the editor toggle button
  */
editor.listenEditorToggle = function () {
    var toggleEl = helpers.getEditorToggleEl();
    toggleEl.addEventListener(
        'click',
        editor.toggle,
        false
    );
 };

 /**
  * Open editor if local store has editor visible
  */
editor.checkEditorHidden = function() {
    var isHidden = model.getEditorHidden();
    if( false === isHidden ) {
        editor.toggle();
    }
};

 /**
  * Controls the toggle for the editor
  * @return (Object) Main toggle element
  */
editor.toggle = function() {
    var editorEl = helpers.getEditorEl(),
        toggleEl = helpers.getEditorToggleEl(),
        // editor.currentContent = model.getCurrentContent();
        links = helpers.getLinks();

        editorEl.classList.toggle('hidden');
        toggleEl.classList.toggle('hidden');

        event.preventDefault();

        // Check if toggle is hidden,
        if( false === toggleEl.classList.contains('hidden') ) {
            editor.fillEditForm( editor.currentContent );
            model.updateEditorHidden(false);
        } else {
            model.updateEditorHidden(true);
            links.forEach( function( link ) {
                link.removeEventListener('click', editor.protectUnsavedContent, false);
            });
        }
};