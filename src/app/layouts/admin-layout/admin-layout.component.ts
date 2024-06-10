import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavBarComponent } from '@bpkids/shared';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, AdminNavBarComponent, RouterModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {}
