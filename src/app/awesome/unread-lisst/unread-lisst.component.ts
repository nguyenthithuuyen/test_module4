import {Component, OnInit} from '@angular/core';
import {Booklist} from 'src/app/booklist';
import {BookService} from 'src/app/services/book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unread-lisst',
  templateUrl: './unread-lisst.component.html',
  styleUrls: ['./unread-lisst.component.scss']
})
export class UnreadLisstComponent implements OnInit {
  books: Booklist[] = [];
  book: any;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
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
