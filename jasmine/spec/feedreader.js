
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        //test makes sure allFeeds variable has been defined, and isn't empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //test that loops through each feed, and ensure that it has a url, and that its not empty.
         it('have URL defined and placed', function() {
            allFeeds.forEach(function(feed) {
               expect(feed.url).toBeTruthy();
             });
         });

         //test that loops through each feed in allFeed object, and ensure it has a name.
        it('have names defined and placed', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.name).toBeTruthy();
            });
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

         //test that ensures that the menu element is hidden
         //that it contains the menu-hidden class by default.
         it('is hidden by default', function() {
           expect(document.body.classList.contains('menu-hidden')).toBe(true);
         });

        //Test that ensures the menu changes visibility. That the menu toggles when clicked.
        it('changes visibility when the menu icon is clicked', function() {
          let btn = document.querySelector('.menu-icon-link');
          btn.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(false);
          btn.click();
          expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });

  });
    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {
        let feedEntries;
         //test that ensures the loadFeed function is called, and complete its work.

        beforeEach(function(done) {
          loadFeed(0, function() {
            feedEntries = document.querySelectorAll('.feed .entry');
            done();
          });
        });
        it('has at least a single entry within feed', function() {
            //at least ONE entry within feed.
            expect(feedEntries[0]).toBeDefined();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

         //test that ensures that when a new feed is loaded, the content changes.
         let before, after, feed;

         feed = document.querySelector('.feed');

         beforeEach(function(done) {
           loadFeed(0, function() {
             before = feed.innerHTML;
             done();
           });
         });


        it('content changes whenever a new feed is loaded', function(done) {
          loadFeed(1, function() {
            after = feed.innerHTML;
            expect(before).not.toBe(after);
            done();
          });
        });
      });
}());
