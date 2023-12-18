import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { CurrentUserService } from '@services/currentUser/current-user.service'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const authGuard: CanActivateFn = (route, state) => {
  return inject(CurrentUserService).currentUser ? true : inject(Router).createUrlTree(['/login'])
}
