import { Component } from '@angular/core';
import { Book, BooksService } from '../../service/books.service';
import { log } from 'console';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books :Book[] = []

  constructor(private bookService:BooksService,private router:Router) {}

  ngOnInit():void {
   this.bookService.getBooks().subscribe((data) =>{
    this.books = data
    console.log(this.books);

   } )
  }

  goToDetails(book:Book) {
    console.log(book._id);
    this.router.navigate(['/book',book._id])

  }

}
