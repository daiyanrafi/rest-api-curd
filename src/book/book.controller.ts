import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";


@Controller("book")
export class BookController{

    constructor(private bookService: BookService){

    }

    //add books
    @Post('/add')
    addBook(@Body() book : Book) : string{
        return this.bookService.addBookService(book);
    }
    
    //update books
    @Put('/update')
    updateBook(@Body() book : Book) : string{
        return this.bookService.updateBookService(book);
    }
    
    //delete books
    @Delete('/delete/:id')
    deleteBook(@Param("id") bookId : string) : string{
        return this.bookService.deleteBookService(bookId);
    }
    
    //find all books
    @Get('/findAll')
    getAllBooks() : Book[]{
        return this.bookService.findAllBooks();
    }
    
}