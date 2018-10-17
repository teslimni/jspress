/**
 * View file for displaying content
 */

/**
 * Main View Object
 */
var View = {};

/**
 * Calls initial View methods
 */
 view.init = function() {
    // view.loadBlogPosts();
 };

/**
 * Gets blog posts and appends them to the page
 */
view.loadBlogPosts = function() {
    var posts = model.getPosts(),
        postsMarkup = document.createDocumentFragment(),
        primaryContentEl = helpers.getPageContentEl();

        for( var i = 0, max = posts.length; i < max; i++ ) {
            postsMarkup.appendChild( view.createPostMarkup( posts[ i ] ) );
        }
        primaryContentEl.appendChild( postsMarkup );
};

/**
 * Loads a single blog post
 * 
 * @param slug (string) Post to create markup for
 */
view.loadBlogPost =  function( slug ) {
    var post = model.getPost( slug ),
        titleEl = helpers.getPageTitleEl(),
        contentEl = helpers.getPageContentEl();

    titleEl.innerHTML = post.title;
    contentEl.innerHTML = post.content;
};

/** Creates markup for Blog Posts 
 * @param object (post) Post to create markup for
 * @return object (articleEl) Final post markup
 */
view.createPostMarkup = function( post ) {
    var articleEl = document.createElement( 'article' ),
        titleEl = document.createElement('h3'),
        titleLink = document.createElement('a'),
        titleText = document.createTextNode(post.title),
        contentEl = document.createElement('div');

    // Build the article title 
    titleLink.appendChild( titleText );
    titleLink.href = '#' + post.slug;
    titleEl.appendChild(titleLink);
    
    // Build the article content
    contentEl.appendChild( document.createTextNode( post.content ) );

    // Create the full article
    articleEl.appendChild( titleEl );
    articleEl.appendChild( contentEl );
    return articleEl;
};

/**
 * Clears title and main content from page
 */
 view.clearContent = function() {
     var titleEl = helpers.getPageTitleEl(),
         contentEl = helpers.getPageContentEl();

    titleEl.innerHTML = '';
    contentEl.innerHTML = '';
 };