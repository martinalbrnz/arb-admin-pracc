import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { RoutesEnum } from '@constants/routes'
import { CurrentUserService } from '@services/currentUser/current-user.service'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const authGuard: CanActivateFn = (route, state) => {
  return inject(CurrentUserService).currentUser 
  ? true 
  : inject(Router).navigate([`/${RoutesEnum.Login}`])
}
