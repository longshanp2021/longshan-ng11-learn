import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IBook } from '../../model/i-book';
import { DomSanitizer } from "@angular/platform-browser";
import { BookService } from '../../service/book.service';
import { Location } from "@angular/common";
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public newsData = null;
  public newsUrl = null;
  public books: Array<IBook> = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    domSanitizer: DomSanitizer,
    private bookSvr: BookService
  ) { }

  public ngOnInit(): void {
    this.queryBook();

  }

  public queryBook() {
    return this.bookSvr.query().subscribe(books => {
      this.books = books;
      this.route.queryParams.subscribe((p) => {
        console.log(p);

      })
    }
    )
  }

}


