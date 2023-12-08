import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { LoginService } from '@services/login/login.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private loginService: LoginService) { }

  loginForm = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ]),
    password: new FormControl<string>('',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ])

  })

  onSubmit() {
    const { username, password } = this.loginForm.value

    if (!username || !password) return

    this.loginService.login(username, password).subscribe({
      next: (value) => {
        console.log(value)
        // redirect to application
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
