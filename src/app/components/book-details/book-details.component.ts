import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BooksService } from '../../service/books.service';
import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf, DatePipe, CurrencyPipe ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  book:Book | undefined

  constructor (private route:ActivatedRoute, private booksService:BooksService, private router:Router) {

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

  goBackToList () {
    this.router.navigate(['/'])

  }
}
