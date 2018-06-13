# Submission for 7 fifty two

## instructions


To start the application execute the following in the root of this repo

    npm start

To start the server containing the mock database execute the following in the root of this repo

    npm run start-db


## Notes about the submission

1. The BlogService isn't yet linked up to the above server to collect data.  json-server was selected as the server
as its interface is very simple and database data is held in a json file, making for easy population and examination.

2. Essentially BlogService will call the backend for any posts and save these to it's this.blogPosts property. The
controller pulls in the BlogService, and the template references the blogPosts property directly.  As BlogService
will update this.blogPosts, the UI should automatically update with any changes.

3. I concentrated mostly on ensure there is enough test coverage for each part of the application, and filling out
functionality as needed.

4. The development environment was a folk of angularjs-webpack; i want a setup that used webpack, provided settings
for dev and prod builds, that would run test scripts automatically and autoloads the browser on updates.

5. There are many many improvements that can be made on this, my immediate next steps would be;
    * to link BlogService to the backend to collect data, 
    * style the blog entry page and link it to BlogService for submission of new posts
    * add an ability to edit a

6. filtering tests were added to the controller and service. As it presently stands the service would collect all blog
data, leaving the controller to perform the filtering.  This could be achieved in several ways;
    * filtering on the ngRepeat
    * have the service apply the filter locally, thus having to implement some pagination ability to the UI and service
    * send the filter to the backend, which can handle some filtering automatically

7. Integration testing was not added at all.  This would have involved using selenium and protractor to drive testing
mainly the routing logic and the correct display of items on the two interfaces


