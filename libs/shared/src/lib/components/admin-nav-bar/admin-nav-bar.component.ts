import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../base.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCloseOutline, ionMenuOutline } from '@ng-icons/ionicons';
import { NAV_ITEMS } from '../../constants/navigation.constants';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'lib-admin-nav-bar',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterModule],
  templateUrl: './admin-nav-bar.component.html',
  styleUrl: './admin-nav-bar.component.css',
  providers: [provideIcons({ ionMenuOutline, ionCloseOutline })],
})
export class AdminNavBarComponent extends BaseComponent implements OnInit {
  isOpen = false;
  navItems = NAV_ITEMS;

  constructor(private _router: Router) {
    super();
  }

  ngOnInit(): void {
    this.handleRouteChanged();
  }

  handleRouteChanged() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap(() => {
          if (this.isOpen) {
            this.toggleMenu();
          }
        }),
        this.autoCleanUp()
      )
      .subscribe();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
