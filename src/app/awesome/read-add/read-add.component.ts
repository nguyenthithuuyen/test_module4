import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';
import {Booklist} from '../../booklist';

@Component({
  selector: 'app-read-add',
  templateUrl: './read-add.component.html',
  styleUrls: ['./read-add.component.scss']
})
export class ReadAddComponent implements OnInit {
  formAddUser: FormGroup;

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) {
  }


  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required]],
      read: true
    });
  }

  submit() {
    let data = this.formAddUser.value;
    this.bookService.addBook(data).subscribe((res: Booklist) => {
      this.router.navigate(['unread-list']);
    });
  }

  get name() {
    return this.formAddUser.get('name');
  }

}
