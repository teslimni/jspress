/**
 * Model file for working with data
 */

/**
 * Main Model Object
 */
var model = {};

model.init = function() {
    model.updateLocalStore( data );
}

/**
 * Gets posts from local store
 * @returns posts (array) An array of post objects
 */
model.getPosts = function() {
    var posts = model.getLocalStore().posts;
    return posts;
};

/**
 * Gets a single post from local store based on url slug
 * 
 * @param slug (string) The slug for the post
 * @returns posts (object) Single post
 */
model.getPost = function ( slug ) {
    var posts = model.getLocalStore().posts;

    for (i = 0, max = posts.length; i < max; i++) {
        if ( slug === posts[i].slug ) {
            return posts[i];
        }
    }
    return null;
};

/**
 * Get pages from local store
 * @return (Object[]) pages Array of page objects
 */
model.getPages = function () {
    var pages = model.getLocalStore().pages;
    return pages;
};


 /**
  * Get a single page based on url slug
  * @param (String) slug The slug for the page
  * @return (Object) page Single page object
  */
model.getPage = function (slug) {
    var pages = model.getLocalStore().pages;

    for (i = 0, max = pages.length; i < max; i++) {
        if (slug === pages[i].slug) {
            return pages[i];
        }
    }
    return null;
};

/**
 * Gets contents from local store
 * @return store (object) Object or array of objects of site data
 */
model.getLocalStore = function() {
    var store = JSON.parse( localStorage.getItem('vanillaPress') );
    return store;
};

/**
* Saves temporary store to local storage
* @param store (string) JSON string of data to store
*/
model.updateLocalStore = function ( store ) {
    localStorage.setItem('vanillaPress', JSON.stringify(store) );
};

/**
 * Deletes data from local store
*/
model.removeLocalStorage = function() {
    localStorage.removeItem('vanillaPress');
}