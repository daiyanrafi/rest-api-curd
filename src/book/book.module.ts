import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookService } from "./book.service";

//book module
@Module({
    imports: [],
    controllers: [ BookController ],
    providers: [ BookService ],
    
})
export class BookModule {}