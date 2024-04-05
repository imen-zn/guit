import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from '../services/authservice.service';

export class authentiticationGuard implements CanActivate {
  constructor(private authService:AuthserviceService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// Vérifie si la route demandée correspond à '/admin'
     if (route.routeConfig && route.routeConfig.path === 'admin') {
      console.log(route);
  // Si oui, vérifie si l'utilisateur est authentifié
  if (this.authService.isAuthenticated) {
    return true; // L'utilisateur est authentifié, la navigation est autorisée
  } else {
    // L'utilisateur n'est pas authentifié,
    this.router.navigateByUrl('/login');
    return false;
  }
} else {
  // Si la route demandée n'est pas '/admin', autorisez la navigation
  return true;
}

  }
};
