import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  #ATO = signal<string>(localStorage.getItem('ATO') ?? '')
  #RTO = signal<string>(localStorage.getItem('RTO') ?? '')

  get ATO() {
    return this.#ATO()
  }

  get RTO() {
    return this.#RTO()
  }

  setATO(ATO: string) {
    localStorage.setItem('ATO', ATO)
    this.#ATO.set(ATO)
  }

  setRTO(RTO: string) {
    localStorage.setItem('RTO', RTO)
    this.#RTO.set(RTO)
  }

  clearTokens() {
    this.#ATO.set('')
    this.#RTO.set('')
    localStorage.removeItem('ATO')
    localStorage.removeItem('RTO')
  }
}
