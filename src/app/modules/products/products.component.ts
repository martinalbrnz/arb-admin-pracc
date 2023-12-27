import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from "./components/form/form.component";

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  imports: [CommonModule, FormComponent]
})
export class ProductsComponent {

}
