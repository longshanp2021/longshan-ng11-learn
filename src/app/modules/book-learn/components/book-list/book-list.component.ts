import { Component, OnInit } from '@angular/core';
import { IBook } from '../../model/i-book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books: Array<IBook> = [];
  constructor(
    private bookSvr: BookService
  ) { }

  public ngOnInit(): void {
    this.queryBook();
  }

  public queryBook() {
    return this.bookSvr.query().subscribe(books => this.books = books)
  }

}
