import app from '../../app';

describe('BlogListController', () => {
    let ctrl, mockBlogService;

    beforeEach(module('BlogEntry', function($provide){
        mockBlogService = {
            getAllBlogPosts: jasmine.createSpy(),
            refreshBlogPosts: ()=>{}
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

});
