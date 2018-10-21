/**
 * View file for displaying content
 */

/**
 * Main View Object
 */
var view = {};

/**
 * Calls initial View methods
 */
view.init = function () {
    view.createMainMenu();
};

/**
 * Gets blog posts and appends them to the page
 */
view.loadBlogPosts = function () {
    var posts = model.getPosts(),
        postsMarkup = document.createDocumentFragment(),
        primaryContentEl = helpers.getPageContentEl();

    for (var i = 0, max = posts.length; i < max; i++) {
        postsMarkup.appendChild(view.createPostMarkup(posts[i]));
    }
    primaryContentEl.appendChild(postsMarkup);
};

/**
 * Display a single post or page based on url
 * 
 * @param slug (string) Post to create markup for
 */
view.loadSingleContent = function (slug) {
    var contentObj = model.getContent(slug),
        titleEl = helpers.getPageTitleEl(),
        contentEl = helpers.getPageContentEl();

    titleEl.innerHTML = contentObj.title;
    contentEl.innerHTML = contentObj.content;
};

/**
 * Create Main Menu links for Pages
 */
view.createMainMenu = function () {
    var pages = model.getPages(),
        menuMarkUp = document.createDocumentFragment(),
        mainMenuEl = helpers.getMainMenuEl();

    for (var i = 0, max = pages.length; i < max; i++) {
        menuMarkUp.appendChild(helpers.createMenuItem(pages[i]));
    }
    mainMenuEl.appendChild(menuMarkUp);
};

/** Creates markup for Blog Posts 
 * @param object (post) Post to create markup for
 * @return object (articleEl) Final post markup
 */
view.createPostMarkup = function (post) {
    var articleEl = document.createElement('article'),
        titleEl = document.createElement('h3'),
        titleLink = document.createElement('a'),
        titleText = document.createTextNode(post.title),
        contentEl = document.createElement('div');

    // Build the article title 
    titleLink.appendChild(titleText);
    titleLink.href = '#' + post.slug;
    titleEl.appendChild(titleLink);

    // Build the article content
    contentEl.appendChild(document.createTextNode(post.content));

    // Create the full article
    articleEl.appendChild(titleEl);
    articleEl.appendChild(contentEl);
    return articleEl;
};

/**
 * Updates the main title for a page or post from editor form
 */
view.updateTitleFromForm = function () {
    var titleEl = helpers.getPageTitleEl(),
        title = helpers.getEditorTitleEl().value;

    titleEl.innerHTML = title;
};


 /**
  * Updates the main content for a page or post from editor form
  */
view.updateContentFromForm = function () {
    var contentEl = helpers.getPageContentEl(),
        content = helpers.getEditorContentEl().value;
        
        contentEl.innerHTML = content;
};

/**
 * Clears title and main content from page
 */
view.clearContent = function () {
    var titleEl = helpers.getPageTitleEl(),
        contentEl = helpers.getPageContentEl();

    titleEl.innerHTML = '';
    contentEl.innerHTML = '';
};