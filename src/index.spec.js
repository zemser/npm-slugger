const index = require('./index');

describe('testing slugger basic functionality', () => {
    it('slugger sanity check', () => {
        expect(index.slugger("hi")).toEqual("hi");
    })
    it('slugger can slug string with spaces', () => {
        expect(index.slugger("hi there")).toEqual("hi-there");
    })
    test('slugger can slug any number of spacy strings', () => {
        expect(index.slugger("hi there", "mr", "stranger")).toEqual("hi-there-mr-stranger");
    })
})