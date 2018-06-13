import app from '../../app';

/**
 * Minified by jsDelivr using UglifyJS v3.0.24.
 * Original file: /npm/phantomjs-polyfill-object-assign@0.0.2/object-assign-polyfill.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"function"!=typeof Object.assign&&(Object.assign=function(n){"use strict";if(void 0===n||null===n)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(n),t=1;t<arguments.length;t++){var o=arguments[t];if(void 0!==o&&null!==o)for(var e in o)o.hasOwnProperty(e)&&(r[e]=o[e])}return r});

describe('BlogEntryController', () => {
    let ctrl, originalModel;

    originalModel = {
        text: 'text',
        tags: 'tag1,tag2',
        id: 1,
        title: 'title'
    };

    beforeEach(() => {
        angular.mock.module(app);

        angular.mock.inject(($controller) => {
            ctrl = $controller('BlogEntryController', {
                model: Object.assign({}, originalModel),
                originalModel: Object.assign({}, originalModel)
            });
        });
    });

    it('should have a method called clear', () => {
        expect(ctrl.clear).toBeDefined();
        expect(ctrl.clear instanceof Function).toBe(true);
    });
    it('should have a method called reset', () => {
        expect(ctrl.reset).toBeDefined();
        expect(ctrl.reset instanceof Function).toBe(true);
    });
    it('should have a method called save', () => {
        expect(ctrl.save).toBeDefined();
        expect(ctrl.save instanceof Function).toBe(true);
    });

    describe('when executing the clear method', () => {
        it('should clear the text, tag and title fields', () => {
            ctrl.clear();
            expect(ctrl.model.text).toEqual('');
            expect(ctrl.model.title).toEqual('');
            expect(ctrl.model.tags).toEqual('');
            expect(ctrl.model.id).toEqual(0);
        });
        it('should not change the data held on originalModel', () => {
            ctrl.clear();
            expect(ctrl.originalModel.text).toEqual(originalModel.text);
            expect(ctrl.originalModel.title).toEqual(originalModel.title);
            expect(ctrl.originalModel.tags).toEqual(originalModel.tags);
            expect(ctrl.originalModel.id).toEqual(originalModel.id);
        });
    })

    describe('when executing the reset method', () => {
        beforeEach(() => {
            // change the value of all the properties on ctrl.model
            Object.keys(ctrl.model).forEach(key => ctrl.model[key]='');
            ctrl.reset();
        });

        it(`should set title back to "${originalModel.title}"`, () => {
            expect(ctrl.model.title).toEqual(originalModel.title);
        });
        it(`should set text back to "${originalModel.text}"`, () => {
            expect(ctrl.model.text).toEqual(originalModel.text);
        });
        it(`should set id back to ${originalModel.id}`, () => {
            expect(ctrl.model.id).toEqual(originalModel.id);
        });
        it(`should set tags back to "${originalModel.tags}"`, () => {
            expect(ctrl.model.tags).toEqual(originalModel.tags);
        });
    });

    describe('when executing the save method', () => {
        beforeEach(function(){
            spyOn(ctrl.BlogService, 'save');
        });
        it('should call BlogService.save with expected data', ()=>{
            ctrl.BlogService.save();
            expect(ctrl.BlogService).toHaveBeenCalled();
            expect(ctrl.BlogService).toHaveBeenCalledWith(originalModel);
        });
    })

    
});
