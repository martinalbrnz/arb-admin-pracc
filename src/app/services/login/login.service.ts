import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  #http = inject(HttpClient)

  login(username: string, password: string) {
    return this.#http.post(`${environment.API_URL}/auth/login`, { username, password })
  }
}
