import { Injectable, signal } from '@angular/core'
import { User } from '@interfaces/user.interface'

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  #currentUser =  signal<User>(JSON.parse(localStorage.getItem('currentUser') ?? '') ?? '')

  get currentUser(): User {
    return this.#currentUser()
  }

  set currentUser(currentUser: User) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
    this.#currentUser.set(currentUser)
  }
}
