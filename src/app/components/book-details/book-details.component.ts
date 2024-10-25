import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BooksService } from '../../service/books.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  book:Book | undefined

  constructor (private route:ActivatedRoute, private booksService:BooksService) {

  }

  ngOnInit ():void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.booksService.getBooks().subscribe((book:Book[]) => {
        this.book = book.find(book => book._id === +id)

        console.log(this.book);


      })

    }
  }
}
