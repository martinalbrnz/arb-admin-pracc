import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PaginationData } from '@interfaces/pagination-data.interface';
import { ApiService } from '@services/api/api.service';

@Component({
  selector: 'app-paginated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginated.component.html',
  styleUrl: './paginated.component.scss'
})
export class PaginatedComponent {
  @Input() pagination!: PaginationData;

  constructor(private apiService: ApiService) { }
}
