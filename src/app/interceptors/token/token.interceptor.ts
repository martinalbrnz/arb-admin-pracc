import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { TokenService } from '@services/token/token.service'

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const _tokenService = inject(TokenService)

  const { ATO, RTO } = _tokenService

  const tokenToAdd = req.url.includes('/refresh') ? RTO : ATO

  const reqClone = req.clone({
    headers: req.headers.set('Authorization', tokenToAdd)
  })

  return next(reqClone)
}
