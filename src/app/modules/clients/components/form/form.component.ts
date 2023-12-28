import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { CardComponent } from '@modules/card/card.component'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule, 
    CardComponent, 
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  constructor() {}

  clientForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ]),
    phone: new FormControl<number | null>(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('[0-9]*')
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
      Validators.maxLength(50),
    ])
  })

  onSubmit(): void {
    const form = this.clientForm
    
    if (form.status === 'VALID') {
      const { name, phone, email } = this.clientForm.value

      // fetch here

      console.log(name, phone, email)
    }
  }
}
