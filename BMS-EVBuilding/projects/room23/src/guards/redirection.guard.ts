import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
class RedirectionGuard {
  readonly APP_NAME: string = 'room23';

  constructor(private router: Router) {}

  canActivate(): boolean {
    let continueRouting = true;
    const isInternal = !this.router.config.some(
      (route: Route) => route.path == this.APP_NAME
    );
    if (isInternal) {
      this.router.navigate(['internal']);
      continueRouting = false;
    }
    return continueRouting;
  }
}

export const canActivateRedirection: CanActivateFn = () => {
  return inject(RedirectionGuard).canActivate();
};
