'use strict'

//InterFaces 1

//a d e
interface IBook
{
    title: string, readonly author: string, published?: Date, pages?: number
}
//b
function testBook(book: IBook)
{
    console.log(book.author, book.title, book.published);
}
// duck typing = if it looks like a duck. it's probably a duck.
//if it looks like an Ibook. it's probaly an Ibook
//we do not need to declare the type
const book =
{
    title: "title", author: "author", published: new Date(Date.UTC(2020, 1, 2)), pages: 666
};
const book2 =
{
    title: "title", author: "author"
};

testBook(book);
testBook(book2);
//f
class Book implements IBook
{
    constructor(
        private _title: string,
        private _author: string,
        private _published: Date,
        private _pages: number
    ) { }
    get title()
    {
        return this._title;
    }
    set title(val: string)
    {
        this._title = val;
    }

    get author()
    {
        return this._author;
    }
    set author(val: string)
    {
        this._author = val;
    }
    get published()
    {
        return this._published;
    }
    set published(val: Date)
    {
        this._published = val;
    }
    get pages()
    {
        return this._pages;
    }
    set pages(val: number)
    {
        this._pages = val;
    }
}


