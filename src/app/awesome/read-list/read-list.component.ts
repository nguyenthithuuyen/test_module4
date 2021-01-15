import {Component, OnInit} from '@angular/core';
import {Booklist} from '../../booklist';
import {BookService} from '../../services/book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.scss']
})
export class ReadListComponent implements OnInit {
  books: Booklist[] = [];
  book;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.bookService.getAll().subscribe((res: Booklist[]) => {
      for (const book of res) {
        if (book.read == false) {
          this.books.push(book);
        }
      }
    });
  }
}
