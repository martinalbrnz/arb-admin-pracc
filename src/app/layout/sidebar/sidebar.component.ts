import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sidebarRoutes } from './sidebarRoutes';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public SidebarNavegation = sidebarRoutes;

  isSidebarOpen = signal(false);

  Open() {
    this.isSidebarOpen.update((isOpen: boolean) => !isOpen);
  }
}
