/**
 * Helper file for extra functions
 */

 var helpers = {};

 /**
  * Create a list items with link inside for menus
  * @param (Object) contentObj Page or post item to create menu item for
  * @returns (Object) menuItemEl List items DOM Object
  */
 helpers.createMenuItem = function( contentObj ) {
    var menuItemEl = document.createElement('li');
     menuItemEl.appendChild(helpers.createLink( contentObj ));
     return menuItemEl;
 };
 
 /**
  * Creates link
  * @param (Object) contentObj Page or post object to create link for
  * @returns (Object) linkEl Link Object
  */
 helpers.createLink = function( contentObj ) {
    var linkEl = document.createElement('a'),
        linkTitle =  document.createTextNode(contentObj.title);

    linkEl.appendChild(linkTitle);
    if( 'home' === contentObj.slug) {
        linkEl.href = '#';
    } else {
        linkEl.href = '#' + contentObj.slug;
    }
    return linkEl;
 };


/**
 * Gets the main menu element
 * @returns (Object) Main Menu object of the DOM
 */
helpers.getMainMenuEl = function () {
    return document.querySelector('#mainNav ul');
};

 /**
  * Gets page title from the DOM
  * @returns (Object) Main Page Title DOM Object
  */
helpers.getPageTitleEl = function () {
    return document.getElementById('pageTitle');
};

/**
  * Gets page content from the DOM
  * @returns (Object) Main Page Content DOM Object
  */
 helpers.getPageContentEl = function() {
     return document.getElementById( 'pageContent' );
 };

 /**
  * Gets the Editor element in the DOM
  * @returns (Object) Main Page Content DOM Object
  */
 helpers.getEditorEl = function() {
     return document.getElementById('editor');
 };

/**
 * Get Editor toggle element in the DOM
 * @return (Object) Main toggle element
 */
helpers.getEditorToggleEl = function () {
    return document.getElementById('editorToggle');
};

/**
 * Get Editor title field element
 * @return (Object) Title field
 */
helpers.getEditorTitleEl = function () {
    return document.getElementById('editTitle');
};

 /**
 * Get Editor content field element
 * @return (Object) Content field
 */
helpers.getEditorContentEl = function () {
    return document.getElementById('editContent');
};