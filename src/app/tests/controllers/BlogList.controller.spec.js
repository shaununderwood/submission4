import app from '../../app';

describe('BlogListController', () => {
    let ctrl, mockBlogService;

    beforeEach(module('BlogEntry', function ($provide) {
        mockBlogService = {
            getAllBlogPosts: jasmine.createSpy(),
            refreshBlogPosts: () => { },
            filterByTag: jasmine.createSpy()
        };
        $provide.value('BlogService', mockBlogService);
    }));

    beforeEach(inject(function (_BlogListController_) {
        ctrl = _BlogListController_;
    }));

    it('pulls in the BlogService', () => {
        expect(ctrl.BlogService).toBeDefined();
        expect(ctrl.BlogService.prototype).toBe(BlogService);
    });

    it('calls BlogService.getAllBlogPosts on instatiation', () => {
        expect(mockBlogService.getAllBlogPosts).toHaveBeenCalled();
    });

    it('calls BlogService.getAllBlogPosts when refresh is called', () => {
        spyOn(mockBlogService.refreshBlogPosts);
        ctrl.refresh();
        expect(mockBlogService.refreshBlogPosts).toHaveBeenCalled();
    });

    it('should have a method called filterByTag', () => {
        expect(ctrl.filterByTag).toBeDefined();
        expect(ctrl.filterByTag instanceof Function).toBe(true);
    });

    describe('when executing the filterByTag method', () => {
        beforeEach(function () {
            spyOn(ctrl.BlogService, 'applyFilter');
        });

        let someText = 'random tag text';

        it('should call BlogService.applyFilter', () => {
            ctrl.filterByTag(someText);
            expect(ctrl.BlogService.applyFilter).toHaveBeenCalled();
            expect(ctrl.BlogService.applyFilter).toHaveBeenCalledWith(someText);
        });
    });

});
