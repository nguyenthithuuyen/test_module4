import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Booklist} from '../../booklist';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  formUpdateBook: FormGroup;
   book: Booklist;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit()
    :
    void {
    this.route.queryParams.subscribe(params => {
      this.book.id = params['id'];
    });

    this.formUpdateBook = this.fb.group({
      id: this.book.id,
      name: ['', [Validators.required]],
    });
  }

  submit() {
    let data = this.formUpdateBook.value;
    this.bookService.update(data).subscribe((res: Booklist) => {
      this.router.navigate(['books']);
    });
  }

}
