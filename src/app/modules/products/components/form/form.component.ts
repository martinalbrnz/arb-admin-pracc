import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Products } from '@interfaces/form-products.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Input() product!: Products[];

  constructor() {
    this.product = [{ name: "product1", price: 25, description: "", stock: 45, isActive: true },
    { name: "product2", price: 50, description: "hgfh", stock: 20, isActive: true }] //asigno valores por default
  }

}
