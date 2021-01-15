import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Booklist} from '../booklist';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient, private router: Router) {
  }

  getAll(): Observable<Booklist[]> {
    return this.http.get<Booklist[]>(environment.url_backend);
  }

  addBook(book: Booklist): Observable<Booklist> {
    return this.http.post<Booklist>(environment.url_backend, book);
  }

  update(book: Booklist): Observable<Booklist> {
    return this.http.put<Booklist>(environment.url_backend, book);
  }

}
