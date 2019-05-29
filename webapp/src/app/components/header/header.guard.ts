import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HeaderService } from './header.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderGuard implements CanActivate {

    constructor(private headerService: HeaderService) { }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (state.url.includes('/home')) {
            this.headerService.setHeaderState('HIDDEN');
        } else if (state.url.includes('/list')) {
            this.headerService.setHeaderState('LARGE');
        } else {
            this.headerService.setHeaderState('SMALL');
        }
        return true;
    }
}