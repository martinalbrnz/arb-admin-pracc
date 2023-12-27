import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  productForm = new FormGroup({
    name: new FormControl<string>("",
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
    price: new FormControl<number>(0,
      [
        Validators.required,
        Validators.maxLength(5)

      ]),
    description: new FormControl<string>("",
      [
        Validators.required,
        Validators.maxLength(50)
      ])


  })


}
