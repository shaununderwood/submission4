
describe('BlogService', () => {

    module('BlogEntry');

    describe('to have a function called', () => {
        let blogService;

        beforeEach(inject(function (_BlogService_) {
            blogService = BlogService;
        }));

        it('getAllBlogPosts', () => {
            expect(blogService.getAllBlogPosts).toBeDefined();
            expect(blogService.getAllBlogPosts instanceof Function).toBeTruthy();
        });
        it('refreshBlogPosts', () => {
            expect(blogService.refreshBlogPosts).toBeDefined();
            expect(blogService.refreshBlogPosts instanceof Function).toBeTruthy();
        });
        it('save', () => {
            expect(blogService.save).toBeDefined();
            expect(blogService.save instanceof Function).toBeTruthy();
        });
    });

    describe('should make a called to the backend', () => {
        let blogService, httpBackend;
        let expectedResponse = { posts: [{ id: 2, title: 'title', text: 'text', tags: 'tag1,tag2' }] };

        beforeEach(inject(function (BlogService, $httpBackend) {
            blogService = BlogService;
            httpBackend = $httpBackend;

            httpBackend.when('GET', '/posts').respond(expectedResponse);
        }));

        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('when getAllBlogPosts is called', () => {
            blogService.refreshBlogPosts();
            httpBackend.expectGet('/posts');
            httpBackend.flush();
        });
        it('when refreshBlogPosts is called', () => {
            blogService.refreshBlogPosts();
            httpBackend.expectGet('/posts');
            httpBackend.flush();
        });
        it('and save results to service.blogPosts', () => {
            blogService.refreshBlogPosts();
            httpBackend.expectGet('/posts');
            httpBackend.flush();
            expect(blogService.blogPosts).toEqual(expectedResponse);
        });
    });

    describe('should call getAllBlogPosts when', () => {
        it('refreshBlogPosts is called', () => {
            spyOn(blogService, getAllBlogPosts);
            blogService.refreshBlogPosts();
            expect(blogService.getAllBlogPosts).toHaveBeenCalled();
        });
    });
});