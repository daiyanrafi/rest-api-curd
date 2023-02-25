import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';


@Injectable()
//service layer for all data manupulation
export class BookService {
    //book data empty array
    public books : Book[] = [];

    //add books
    addBookService(book: Book) : string{
        //id auto generated
        book.id = uuidv4();
        this.books.push(book);
        return "Book added successfully";
    }

    //update books
    updateBookService(book: Book) : string{
        let index = this.books.findIndex((currentBook) => {
            return currentBook.id == book.id;
        });
        this.books[index] = book;
        return "Book updated successfully";
    }

    //delete books
    deleteBookService(bookId : string) : string{
        this.books = this.books.filter((book) => {
            return book.id != bookId;
        });
        return "Book deleted successfully";
    }

    //find all books
    findAllBooks():  Book[]{
        return this.books;
    }
}
