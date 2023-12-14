import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationData } from '@interfaces/pagination-data.interface';

@Component({
  selector: 'app-paginated',
  standalone: true,
  templateUrl: './paginated.component.html',
  styleUrl: './paginated.component.scss',
  imports: [CommonModule]
})

export class PaginatedComponent {
  @Input() pagination: PaginationData;
  @Output() prev = new EventEmitter<number>();
  @Output() next = new EventEmitter<number>();


  nextPage() {
    if (this.pagination.currentPage < this.pagination.pages) {
      this.pagination.elementsPerPage += 5
      this.pagination.currentPage += 1
      this.next.emit()
    }

  }

  prevPage() {
    if (this.pagination.elementsPerPage > 0) {
      this.pagination.elementsPerPage -= 5
      this.pagination.currentPage -= 1
      this.prev.emit()
    }
  }

  constructor() {
    this.pagination =
      { count: 100, pages: 10, elementsPerPage: 0, currentPage: 1 } //asigno valores por default

  }

}