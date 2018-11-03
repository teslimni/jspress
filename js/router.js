/**
 * Router file for managing url changes
 */

/**
 * The main Router
 */
var router = {};

/**
 * Initializes the Router
 */
router.init = function () {
    router.loadContent();
    router.listenPageChange();
};

/**
 *  Gets slug from the URL
 * @returns the slug (string) Slug for content
 */
router.getSlug = function () {
    var slug = window.location.hash;
    if ("" === slug) {
        return null;
    } else {
        return slug.substring(1);
    }
};

/**
 *  Listener function for URL changes
 */
router.listenPageChange = function () {
    window.addEventListener('hashchange', router.loadContent, false)
};

/**
 *  Determines what to load
 */
router.loadContent = function () {
    var slug = router.getSlug();
        toggleEl = helpers.getEditorToggleEl();
    view.clearContent();
    if (null === slug) {
        view.loadSingleContent('home');
    } else if ('blog' === slug) {
        view.loadBlogPosts();
    }
    else {
        view.loadSingleContent(slug);
    }
    editor.currentContent = model.getContent(slug);
    if (false === toggleEl.classList.contains('hidden')) {
        editor.fillEditForm(editor.currentContent);
    }
};

