import { TestBed } from '@angular/core/testing'

import { TokenService } from './token.service'

describe('TokenService', () => {
  let service: TokenService
  const ATOValue = Math.random().toString()
  const RTOValue = Math.random().toString()

  beforeEach(() => {
    localStorage.setItem('ATO', ATOValue)
    localStorage.setItem('RTO', RTOValue)

    TestBed.configureTestingModule({})
    service = TestBed.inject(TokenService)

  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get current token values', () => {
    expect(service.ATO).toBe(ATOValue)
    expect(service.RTO).toBe(RTOValue)
  })

  it('should set new token values and local storage', () => {
    const newATOValue = Math.random().toString()
    const newRTOValue = Math.random().toString()

    service.setATO(newATOValue)
    service.setRTO(newRTOValue)

    expect(localStorage.getItem('ATO')).toBe(newATOValue)
    expect(localStorage.getItem('RTO')).toBe(newRTOValue)

    expect(service.ATO).toBe(newATOValue)
    expect(service.RTO).toBe(newRTOValue)
  })

  it('should clear token values', () => {
    expect(service.ATO).not.toBe('')
    expect(service.RTO).not.toBe('')

    service.clearTokens()

    expect(service.ATO).toBe('')
    expect(service.RTO).toBe('')
  })
})
