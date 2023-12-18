import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import type { User } from '@interfaces/user.interface'
import { CurrentUserService } from '@services/currentUser/current-user.service'
import { LoginService } from '@services/login/login.service'
import { TokenService } from '@services/token/token.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [LoginService, TokenService, CurrentUserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(
    private loginService: LoginService, 
    private tokenService: TokenService, 
    private currentUserService: CurrentUserService,
    private router: Router
    ) { }

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
        const { data, RTO, ATO } = value as {RTO: string, ATO: string, data: User}

        if (RTO && ATO && data) {
          this.currentUserService.setCurrentUser(data)
          this.tokenService.setATO(ATO)
          this.tokenService.setRTO(RTO)
        }
       
        this.router.navigateByUrl('/')
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
