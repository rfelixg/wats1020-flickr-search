
// Asynchronous Flickr Search
//
// Flickr reveals a searchable JSON Feed you can access via jQuery's $.getJSON()
// method. Use this to allow users to search for a tag or comma-separated list
// of tags and view the images that are found.
//
// Allow users to click the images to see a larger version with more information.
$(document).on('ready', function(){
    // Place your code here, inside the document ready handler.
    // Inside the `searchImages()` function, the following things should happen:

    // Create a function called `searchImages()`. This function will handle the
    // process of taking a user's search terms and sending them to Flickr for a
    // response.

    // 1.   Accept a string value called `tags` as an argument. Example:
    //      `var searchPhotos = function(tags){`
    // function searchImages(tags){
    var searchImages = function(tags){

        // 2.   Define the location of the Flickr API like this:
        //      `var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";`
        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

        // 3.   Construct a `$.getJSON()` call where you send a request object
        //      including the tags the user submitted, and a `done()` handler
        //      that displays and refreshes the content appropriately.
        $.getJSON( flickerAPI , {
              tags: tags,
              tagmode: "any",
              format: "json"
              }) .done(function( data ) {
                $.each( data.items, function( i, item ) {
                // 4.   Update the display to add the images to the list with the id `#images`.
                $( "<img>" ).attr( "src", item.media.m ).prependTo( "#images" );
                if ( i === 10 ) {
                return false;
            }
          });
        });
    }

    // Attach an event to the search button (`button.search`) to execute the
    // search when clicked.
    $('button.search').on('click', function(event){

        // 1.   Prevent the default event execution so the browser doesn't
        //Example: `event.preventDefault();`
        event.preventDefault();

        // 2.   Get the value of the 'input[name="searchText"]' and use that
        //      as the `tags` value you send to `searchImages()`.
        var searchTextInput = $(event.target.parentElement).find('input[name="searchText"]')[0];

        // 3.   Execute the `searchImages()` function to fetch images for the
        //      user.
        searchImages(searchTextInput.value);
      });


    // STRETCH GOAL: Add a "more info" popup using the technique shown on the
    // Bootstrap Modal documentation: http://getbootstrap.com/javascript/#modals-related-target
});
