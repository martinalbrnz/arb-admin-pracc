import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoutesEnum } from '@constants/routes';
import { CurrentUserService } from '@services/currentUser/current-user.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const currentUserService = inject(CurrentUserService)
  const router = inject(Router)

  if (currentUserService.currentUser) {
    return router.navigate([`/${RoutesEnum.Clients}`])
  }

  return true
};

