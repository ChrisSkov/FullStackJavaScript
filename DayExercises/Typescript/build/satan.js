'use strict';
//b
function testBook(book) {
    console.log(book.author, book.title, book.published);
}
// duck typing = if it looks like a duck. it's probably a duck.
//if it looks like an Ibook. it's probaly an Ibook
//we do not need to declare the type
const book = {
    title: "title", author: "author", published: new Date(Date.UTC(2020, 1, 2)), pages: 666
};
const book2 = {
    title: "title", author: "author"
};
testBook(book);
testBook(book2);
//f
class Book {
    constructor(_title, _author, _published, _pages) {
        this._title = _title;
        this._author = _author;
        this._published = _published;
        this._pages = _pages;
    }
    get title() {
        return this._title;
    }
    set title(val) {
        this._title = val;
    }
    get author() {
        return this._author;
    }
    set author(val) {
        this._author = val;
    }
    get published() {
        return this._published;
    }
    set published(val) {
        this._published = val;
    }
    get pages() {
        return this._pages;
    }
    set pages(val) {
        this._pages = val;
    }
}
//# sourceMappingURL=satan.js.map